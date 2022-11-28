import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HecEndpointTypeEnum } from "./hecendpointtypeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { SplunkRetryOptions } from "./splunkretryoptions";
import { SplunkS3BackupModeEnum } from "./splunks3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";



// SplunkDestinationUpdate
/** 
 * Describes an update for a destination in Splunk.
**/
export class SplunkDestinationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=HECAcknowledgmentTimeoutInSeconds" })
  hecAcknowledgmentTimeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=HECEndpoint" })
  hecEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=HECEndpointType" })
  hecEndpointType?: HecEndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=HECToken" })
  hecToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: SplunkRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: SplunkS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Update" })
  s3Update?: S3DestinationUpdate;
}
