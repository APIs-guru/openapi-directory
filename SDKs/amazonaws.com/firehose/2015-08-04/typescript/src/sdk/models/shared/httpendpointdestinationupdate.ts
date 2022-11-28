import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointConfiguration } from "./httpendpointconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";



// HttpEndpointDestinationUpdate
/** 
 * Updates the specified HTTP endpoint destination.
**/
export class HttpEndpointDestinationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BufferingHints" })
  bufferingHints?: HttpEndpointBufferingHints;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfiguration" })
  endpointConfiguration?: HttpEndpointConfiguration;

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

  @SpeakeasyMetadata({ data: "json, name=S3Update" })
  s3Update?: S3DestinationUpdate;
}
