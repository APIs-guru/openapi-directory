import { SpeakeasyBase } from "../../../internal/utils";
import { SuggesterStatus } from "./suggesterstatus";
/**
 * The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
**/
export declare class DefineSuggesterResponse extends SpeakeasyBase {
    suggester: SuggesterStatus;
}
