import { SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DataFormatConversionConfiguration } from "./dataformatconversionconfiguration";
import { DynamicPartitioningConfiguration } from "./dynamicpartitioningconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
import { S3BackupModeEnum } from "./s3backupmodeenum";
/**
 * Describes a destination in Amazon S3.
**/
export declare class ExtendedS3DestinationDescription extends SpeakeasyBase {
    bucketArn: string;
    bufferingHints: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat: CompressionFormatEnum;
    dataFormatConversionConfiguration?: DataFormatConversionConfiguration;
    dynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
    encryptionConfiguration: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    processingConfiguration?: ProcessingConfiguration;
    roleArn: string;
    s3BackupDescription?: S3DestinationDescription;
    s3BackupMode?: S3BackupModeEnum;
}
