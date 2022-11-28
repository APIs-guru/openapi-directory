import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HecEndpointTypeEnum } from "./hecendpointtypeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { SplunkRetryOptions } from "./splunkretryoptions";
import { SplunkS3BackupModeEnum } from "./splunks3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
/**
 * Describes a destination in Splunk.
**/
export declare class SplunkDestinationDescription extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    hecAcknowledgmentTimeoutInSeconds?: number;
    hecEndpoint?: string;
    hecEndpointType?: HecEndpointTypeEnum;
    hecToken?: string;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: SplunkRetryOptions;
    s3BackupMode?: SplunkS3BackupModeEnum;
    s3DestinationDescription?: S3DestinationDescription;
}
