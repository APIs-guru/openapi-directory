import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>.
**/
export declare class SuggestionMatch extends SpeakeasyBase {
    id?: string;
    score?: number;
    suggestion?: string;
}
