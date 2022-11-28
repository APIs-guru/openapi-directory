import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";



// RedshiftDestinationConfiguration
/** 
 * Describes the configuration of a destination in Amazon Redshift.
**/
export class RedshiftDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=ClusterJDBCURL" })
  clusterJdbcurl: string;

  @SpeakeasyMetadata({ data: "json, name=CopyCommand" })
  copyCommand: CopyCommand;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: RedshiftRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupConfiguration" })
  s3BackupConfiguration?: S3DestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: RedshiftS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Configuration" })
  s3Configuration: S3DestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
