import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details of the step failure. The service attempts to detect the root cause for many common failures.
**/
export declare class FailureDetails extends SpeakeasyBase {
    logFile?: string;
    message?: string;
    reason?: string;
}
