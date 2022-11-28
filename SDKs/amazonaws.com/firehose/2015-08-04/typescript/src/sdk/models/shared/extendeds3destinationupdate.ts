import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DataFormatConversionConfiguration } from "./dataformatconversionconfiguration";
import { DynamicPartitioningConfiguration } from "./dynamicpartitioningconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3BackupModeEnum } from "./s3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";



// ExtendedS3DestinationUpdate
/** 
 * Describes an update for a destination in Amazon S3.
**/
export class ExtendedS3DestinationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BufferingHints" })
  bufferingHints?: BufferingHints;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=CompressionFormat" })
  compressionFormat?: CompressionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=DataFormatConversionConfiguration" })
  dataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DynamicPartitioningConfiguration" })
  dynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ErrorOutputPrefix" })
  errorOutputPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: S3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3BackupUpdate" })
  s3BackupUpdate?: S3DestinationUpdate;
}
