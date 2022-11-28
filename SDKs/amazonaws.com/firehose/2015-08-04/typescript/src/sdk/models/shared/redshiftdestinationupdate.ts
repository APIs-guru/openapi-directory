import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";



// RedshiftDestinationUpdate
/** 
 * Describes an update for a destination in Amazon Redshift.
**/
export class RedshiftDestinationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=ClusterJDBCURL" })
  clusterJdbcurl?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyCommand" })
  copyCommand?: CopyCommand;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: RedshiftRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: RedshiftS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3BackupUpdate" })
  s3BackupUpdate?: S3DestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=S3Update" })
  s3Update?: S3DestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
