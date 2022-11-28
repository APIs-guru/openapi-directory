import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";
/**
 *  Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
**/
export declare class LogsConfig extends SpeakeasyBase {
    cloudWatchLogs?: CloudWatchLogsConfig;
    s3Logs?: S3LogsConfig;
}
