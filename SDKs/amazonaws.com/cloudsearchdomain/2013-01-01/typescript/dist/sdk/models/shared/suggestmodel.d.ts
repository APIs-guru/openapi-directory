import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SuggestionMatch } from "./suggestionmatch";
/**
 * Container for the suggestion information returned in a <code>SuggestResponse</code>.
**/
export declare class SuggestModel extends SpeakeasyBase {
    found?: number;
    query?: string;
    suggestions?: SuggestionMatch[];
}
