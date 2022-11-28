import { SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointDescription } from "./httpendpointdescription";
import { ProcessingConfiguration } from "./processingconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
/**
 * Describes the HTTP endpoint destination.
**/
export declare class HttpEndpointDestinationDescription extends SpeakeasyBase {
    bufferingHints?: HttpEndpointBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    endpointConfiguration?: HttpEndpointDescription;
    processingConfiguration?: ProcessingConfiguration;
    requestConfiguration?: HttpEndpointRequestConfiguration;
    retryOptions?: HttpEndpointRetryOptions;
    roleArn?: string;
    s3BackupMode?: HttpEndpointS3BackupModeEnum;
    s3DestinationDescription?: S3DestinationDescription;
}
