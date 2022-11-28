import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents configuration information about a test run, such as the execution timeout (in minutes).
**/
export declare class ExecutionConfiguration extends SpeakeasyBase {
    accountsCleanup?: boolean;
    appPackagesCleanup?: boolean;
    jobTimeoutMinutes?: number;
    skipAppResign?: boolean;
    videoCapture?: boolean;
}
