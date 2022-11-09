import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointConfiguration } from "./httpendpointconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";


// HttpEndpointDestinationConfiguration
/** 
 * Describes the configuration of the HTTP endpoint destination.
**/
export class HttpEndpointDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BufferingHints" })
  bufferingHints?: HttpEndpointBufferingHints;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=EndpointConfiguration" })
  endpointConfiguration: HttpEndpointConfiguration;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RequestConfiguration" })
  requestConfiguration?: HttpEndpointRequestConfiguration;

  @Metadata({ data: "json, name=RetryOptions" })
  retryOptions?: HttpEndpointRetryOptions;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: HttpEndpointS3BackupModeEnum;

  @Metadata({ data: "json, name=S3Configuration" })
  s3Configuration: S3DestinationConfiguration;
}
