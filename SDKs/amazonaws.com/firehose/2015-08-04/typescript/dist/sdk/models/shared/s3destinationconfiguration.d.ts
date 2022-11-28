import { SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * Describes the configuration of a destination in Amazon S3.
**/
export declare class S3DestinationConfiguration extends SpeakeasyBase {
    bucketArn: string;
    bufferingHints?: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat?: CompressionFormatEnum;
    encryptionConfiguration?: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    roleArn: string;
}
