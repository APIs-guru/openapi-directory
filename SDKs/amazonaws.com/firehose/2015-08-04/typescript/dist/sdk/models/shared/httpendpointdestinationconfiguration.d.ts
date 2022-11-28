import { SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointConfiguration } from "./httpendpointconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
/**
 * Describes the configuration of the HTTP endpoint destination.
**/
export declare class HttpEndpointDestinationConfiguration extends SpeakeasyBase {
    bufferingHints?: HttpEndpointBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    endpointConfiguration: HttpEndpointConfiguration;
    processingConfiguration?: ProcessingConfiguration;
    requestConfiguration?: HttpEndpointRequestConfiguration;
    retryOptions?: HttpEndpointRetryOptions;
    roleArn?: string;
    s3BackupMode?: HttpEndpointS3BackupModeEnum;
    s3Configuration: S3DestinationConfiguration;
}
