import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HecEndpointTypeEnum } from "./hecendpointtypeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { SplunkRetryOptions } from "./splunkretryoptions";
import { SplunkS3BackupModeEnum } from "./splunks3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";


// SplunkDestinationDescription
/** 
 * Describes a destination in Splunk.
**/
export class SplunkDestinationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=HECAcknowledgmentTimeoutInSeconds" })
  hecAcknowledgmentTimeoutInSeconds?: number;

  @Metadata({ data: "json, name=HECEndpoint" })
  hecEndpoint?: string;

  @Metadata({ data: "json, name=HECEndpointType" })
  hecEndpointType?: HecEndpointTypeEnum;

  @Metadata({ data: "json, name=HECToken" })
  hecToken?: string;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RetryOptions" })
  retryOptions?: SplunkRetryOptions;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: SplunkS3BackupModeEnum;

  @Metadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;
}
