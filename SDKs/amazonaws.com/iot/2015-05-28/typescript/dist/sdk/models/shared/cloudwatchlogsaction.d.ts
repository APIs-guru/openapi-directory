import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action that sends data to CloudWatch Logs.
**/
export declare class CloudwatchLogsAction extends SpeakeasyBase {
    logGroupName: string;
    roleArn: string;
}
