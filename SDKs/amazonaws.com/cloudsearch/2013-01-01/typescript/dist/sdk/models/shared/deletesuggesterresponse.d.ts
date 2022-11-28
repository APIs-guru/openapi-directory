import { SpeakeasyBase } from "../../../internal/utils";
import { SuggesterStatus } from "./suggesterstatus";
/**
 * The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
**/
export declare class DeleteSuggesterResponse extends SpeakeasyBase {
    suggester: SuggesterStatus;
}
