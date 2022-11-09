import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchException
/** 
 * Information about any problems encountered while processing a search request.
**/
export class SearchException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
