import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";


// LogsConfig
/** 
 *  Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. 
**/
export class LogsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsConfig;

  @Metadata({ data: "json, name=s3Logs" })
  s3Logs?: S3LogsConfig;
}
