import { SpeakeasyBase } from "../../../internal/utils";
import { SuggesterStatus } from "./suggesterstatus";
/**
 * The result of a <code>DescribeSuggesters</code> request.
**/
export declare class DescribeSuggestersResponse extends SpeakeasyBase {
    suggesters: SuggesterStatus[];
}
