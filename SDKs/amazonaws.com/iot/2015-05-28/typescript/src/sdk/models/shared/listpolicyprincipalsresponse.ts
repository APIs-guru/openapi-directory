import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListPolicyPrincipalsResponse
/** 
 * The output from the ListPolicyPrincipals operation.
**/
export class ListPolicyPrincipalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=principals" })
  principals?: string[];
}
