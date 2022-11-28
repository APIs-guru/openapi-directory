import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A <code>RetryPolicy</code> object that includes information about the retry policy settings.
**/
export declare class RetryPolicy extends SpeakeasyBase {
    maximumEventAgeInSeconds?: number;
    maximumRetryAttempts?: number;
}
