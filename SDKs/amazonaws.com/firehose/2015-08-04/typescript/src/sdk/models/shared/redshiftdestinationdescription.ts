import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { S3DestinationDescription } from "./s3destinationdescription";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";



// RedshiftDestinationDescription
/** 
 * Describes a destination in Amazon Redshift.
**/
export class RedshiftDestinationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=ClusterJDBCURL" })
  clusterJdbcurl: string;

  @SpeakeasyMetadata({ data: "json, name=CopyCommand" })
  copyCommand: CopyCommand;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: RedshiftRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupDescription" })
  s3BackupDescription?: S3DestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: RedshiftS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription: S3DestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
