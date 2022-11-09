import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { S3DestinationDescription } from "./s3destinationdescription";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";


// RedshiftDestinationDescription
/** 
 * Describes a destination in Amazon Redshift.
**/
export class RedshiftDestinationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=ClusterJDBCURL" })
  clusterJdbcurl: string;

  @Metadata({ data: "json, name=CopyCommand" })
  copyCommand: CopyCommand;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RetryOptions" })
  retryOptions?: RedshiftRetryOptions;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=S3BackupDescription" })
  s3BackupDescription?: S3DestinationDescription;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: RedshiftS3BackupModeEnum;

  @Metadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription: S3DestinationDescription;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
