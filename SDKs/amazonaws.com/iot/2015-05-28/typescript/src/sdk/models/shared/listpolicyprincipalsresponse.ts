import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListPolicyPrincipalsResponse
/** 
 * The output from the ListPolicyPrincipals operation.
**/
export class ListPolicyPrincipalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=principals" })
  principals?: string[];
}
