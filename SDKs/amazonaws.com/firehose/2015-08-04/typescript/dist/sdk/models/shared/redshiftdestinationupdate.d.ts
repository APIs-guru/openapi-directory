import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Describes an update for a destination in Amazon Redshift.
**/
export declare class RedshiftDestinationUpdate extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterJdbcurl?: string;
    copyCommand?: CopyCommand;
    password?: string;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: RedshiftRetryOptions;
    roleArn?: string;
    s3BackupMode?: RedshiftS3BackupModeEnum;
    s3BackupUpdate?: S3DestinationUpdate;
    s3Update?: S3DestinationUpdate;
    username?: string;
}
