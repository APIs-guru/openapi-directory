import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
/**
 * Describes the configuration of a destination in Amazon Redshift.
**/
export declare class RedshiftDestinationConfiguration extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterJdbcurl: string;
    copyCommand: CopyCommand;
    password: string;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: RedshiftRetryOptions;
    roleArn: string;
    s3BackupConfiguration?: S3DestinationConfiguration;
    s3BackupMode?: RedshiftS3BackupModeEnum;
    s3Configuration: S3DestinationConfiguration;
    username: string;
}
