import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggesterStatus } from "./suggesterstatus";



// DeleteSuggesterResponse
/** 
 * The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
**/
export class DeleteSuggesterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  suggester: SuggesterStatus;
}
