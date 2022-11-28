import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status, start time, and end time of a backtest, as well as a failure reason if applicable.
**/
export declare class TestWindowSummary extends SpeakeasyBase {
    message?: string;
    status?: string;
    testWindowEnd?: Date;
    testWindowStart?: Date;
}
