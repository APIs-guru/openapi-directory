import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListThingPrincipalsResponse
/** 
 * The output from the ListThingPrincipals operation.
**/
export class ListThingPrincipalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=principals" })
  principals?: string[];
}
