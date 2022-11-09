import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DataFormatConversionConfiguration } from "./dataformatconversionconfiguration";
import { DynamicPartitioningConfiguration } from "./dynamicpartitioningconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
import { S3BackupModeEnum } from "./s3backupmodeenum";


// ExtendedS3DestinationDescription
/** 
 * Describes a destination in Amazon S3.
**/
export class ExtendedS3DestinationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @Metadata({ data: "json, name=BufferingHints" })
  bufferingHints: BufferingHints;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=CompressionFormat" })
  compressionFormat: CompressionFormatEnum;

  @Metadata({ data: "json, name=DataFormatConversionConfiguration" })
  dataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  @Metadata({ data: "json, name=DynamicPartitioningConfiguration" })
  dynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;

  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration: EncryptionConfiguration;

  @Metadata({ data: "json, name=ErrorOutputPrefix" })
  errorOutputPrefix?: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=S3BackupDescription" })
  s3BackupDescription?: S3DestinationDescription;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: S3BackupModeEnum;
}
