import { SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DataFormatConversionConfiguration } from "./dataformatconversionconfiguration";
import { DynamicPartitioningConfiguration } from "./dynamicpartitioningconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3BackupModeEnum } from "./s3backupmodeenum";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Describes an update for a destination in Amazon S3.
**/
export declare class ExtendedS3DestinationUpdate extends SpeakeasyBase {
    bucketArn?: string;
    bufferingHints?: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat?: CompressionFormatEnum;
    dataFormatConversionConfiguration?: DataFormatConversionConfiguration;
    dynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
    encryptionConfiguration?: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    processingConfiguration?: ProcessingConfiguration;
    roleArn?: string;
    s3BackupMode?: S3BackupModeEnum;
    s3BackupUpdate?: S3DestinationUpdate;
}
