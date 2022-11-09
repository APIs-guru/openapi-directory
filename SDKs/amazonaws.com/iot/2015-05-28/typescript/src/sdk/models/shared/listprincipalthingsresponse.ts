import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListPrincipalThingsResponse
/** 
 * The output from the ListPrincipalThings operation.
**/
export class ListPrincipalThingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=things" })
  things?: string[];
}
