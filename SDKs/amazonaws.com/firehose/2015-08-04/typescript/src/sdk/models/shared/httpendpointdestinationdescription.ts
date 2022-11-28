import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointDescription } from "./httpendpointdescription";
import { ProcessingConfiguration } from "./processingconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";



// HttpEndpointDestinationDescription
/** 
 * Describes the HTTP endpoint destination.
**/
export class HttpEndpointDestinationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BufferingHints" })
  bufferingHints?: HttpEndpointBufferingHints;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfiguration" })
  endpointConfiguration?: HttpEndpointDescription;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RequestConfiguration" })
  requestConfiguration?: HttpEndpointRequestConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: HttpEndpointRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: HttpEndpointS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;
}
