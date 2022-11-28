import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.
**/
export declare class CloudWatchMonitoringConfiguration extends SpeakeasyBase {
    logGroupName: string;
    logStreamNamePrefix?: string;
}
