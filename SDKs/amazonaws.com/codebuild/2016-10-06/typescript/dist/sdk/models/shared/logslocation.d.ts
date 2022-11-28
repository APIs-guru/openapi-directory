import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";
/**
 * Information about build logs in CloudWatch Logs.
**/
export declare class LogsLocation extends SpeakeasyBase {
    cloudWatchLogs?: CloudWatchLogsConfig;
    cloudWatchLogsArn?: string;
    deepLink?: string;
    groupName?: string;
    s3DeepLink?: string;
    s3Logs?: S3LogsConfig;
    s3LogsArn?: string;
    streamName?: string;
}
