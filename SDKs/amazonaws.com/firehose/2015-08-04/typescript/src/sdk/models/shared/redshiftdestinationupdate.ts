import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";
import { S3DestinationUpdate } from "./s3destinationupdate";


// RedshiftDestinationUpdate
/** 
 * Describes an update for a destination in Amazon Redshift.
**/
export class RedshiftDestinationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=ClusterJDBCURL" })
  clusterJdbcurl?: string;

  @Metadata({ data: "json, name=CopyCommand" })
  copyCommand?: CopyCommand;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RetryOptions" })
  retryOptions?: RedshiftRetryOptions;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: RedshiftS3BackupModeEnum;

  @Metadata({ data: "json, name=S3BackupUpdate" })
  s3BackupUpdate?: S3DestinationUpdate;

  @Metadata({ data: "json, name=S3Update" })
  s3Update?: S3DestinationUpdate;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
