import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchException
/** 
 * Information about any problems encountered while processing a search request.
**/
export class SearchException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
