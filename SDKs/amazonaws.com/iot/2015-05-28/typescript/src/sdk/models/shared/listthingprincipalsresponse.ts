import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListThingPrincipalsResponse
/** 
 * The output from the ListThingPrincipals operation.
**/
export class ListThingPrincipalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=principals" })
  principals?: string[];
}
