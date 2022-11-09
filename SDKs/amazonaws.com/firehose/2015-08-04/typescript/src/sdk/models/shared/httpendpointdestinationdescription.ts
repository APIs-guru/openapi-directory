import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=BufferingHints" })
  bufferingHints?: HttpEndpointBufferingHints;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=EndpointConfiguration" })
  endpointConfiguration?: HttpEndpointDescription;

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

  @Metadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;
}
