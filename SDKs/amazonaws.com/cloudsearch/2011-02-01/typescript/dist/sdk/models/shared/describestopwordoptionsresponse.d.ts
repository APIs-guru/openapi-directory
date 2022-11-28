import { SpeakeasyBase } from "../../../internal/utils";
import { StopwordOptionsStatus } from "./stopwordoptionsstatus";
/**
 * A response message that contains the stopword options for a search domain.
**/
export declare class DescribeStopwordOptionsResponse extends SpeakeasyBase {
    stopwords: StopwordOptionsStatus;
}
