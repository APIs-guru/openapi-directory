import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";



// LogsConfig
/** 
 *  Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. 
**/
export class LogsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsConfig;

  @SpeakeasyMetadata({ data: "json, name=s3Logs" })
  s3Logs?: S3LogsConfig;
}
