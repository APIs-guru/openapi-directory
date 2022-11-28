import { SpeakeasyBase } from "../../../internal/utils";
import { StopwordOptionsStatus } from "./stopwordoptionsstatus";
/**
 * A response message that contains the status of updated stopword options.
**/
export declare class UpdateStopwordOptionsResponse extends SpeakeasyBase {
    stopwords: StopwordOptionsStatus;
}
