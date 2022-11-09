import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";


// LogsLocation
/** 
 * Information about build logs in CloudWatch Logs.
**/
export class LogsLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsConfig;

  @Metadata({ data: "json, name=cloudWatchLogsArn" })
  cloudWatchLogsArn?: string;

  @Metadata({ data: "json, name=deepLink" })
  deepLink?: string;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=s3DeepLink" })
  s3DeepLink?: string;

  @Metadata({ data: "json, name=s3Logs" })
  s3Logs?: S3LogsConfig;

  @Metadata({ data: "json, name=s3LogsArn" })
  s3LogsArn?: string;

  @Metadata({ data: "json, name=streamName" })
  streamName?: string;
}
