import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestStatus } from "./suggeststatus";
import { SuggestModel } from "./suggestmodel";
/**
 * Contains the response to a <code>Suggest</code> request.
**/
export declare class SuggestResponse extends SpeakeasyBase {
    status?: SuggestStatus;
    suggest?: SuggestModel;
}
