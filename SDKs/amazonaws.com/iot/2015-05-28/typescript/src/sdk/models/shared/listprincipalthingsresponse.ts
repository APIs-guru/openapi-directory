import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListPrincipalThingsResponse
/** 
 * The output from the ListPrincipalThings operation.
**/
export class ListPrincipalThingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=things" })
  things?: string[];
}
