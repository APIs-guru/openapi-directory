import { SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DataFormatConversionConfiguration } from "./dataformatconversionconfiguration";
import { DynamicPartitioningConfiguration } from "./dynamicpartitioningconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { S3BackupModeEnum } from "./s3backupmodeenum";
/**
 * Describes the configuration of a destination in Amazon S3.
**/
export declare class ExtendedS3DestinationConfiguration extends SpeakeasyBase {
    bucketArn: string;
    bufferingHints?: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat?: CompressionFormatEnum;
    dataFormatConversionConfiguration?: DataFormatConversionConfiguration;
    dynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
    encryptionConfiguration?: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    processingConfiguration?: ProcessingConfiguration;
    roleArn: string;
    s3BackupConfiguration?: S3DestinationConfiguration;
    s3BackupMode?: S3BackupModeEnum;
}
