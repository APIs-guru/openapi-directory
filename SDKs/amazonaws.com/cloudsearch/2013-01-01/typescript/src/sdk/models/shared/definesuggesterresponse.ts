import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggesterStatus } from "./suggesterstatus";



// DefineSuggesterResponse
/** 
 * The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
**/
export class DefineSuggesterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  suggester: SuggesterStatus;
}
