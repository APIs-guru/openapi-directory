import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfig } from "./cloudwatchlogsconfig";
import { S3LogsConfig } from "./s3logsconfig";



// LogsLocation
/** 
 * Information about build logs in CloudWatch Logs.
**/
export class LogsLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsConfig;

  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogsArn" })
  cloudWatchLogsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=deepLink" })
  deepLink?: string;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=s3DeepLink" })
  s3DeepLink?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Logs" })
  s3Logs?: S3LogsConfig;

  @SpeakeasyMetadata({ data: "json, name=s3LogsArn" })
  s3LogsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName?: string;
}
