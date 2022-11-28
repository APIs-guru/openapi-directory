import { SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * Describes an update for a destination in Amazon S3.
**/
export declare class S3DestinationUpdate extends SpeakeasyBase {
    bucketArn?: string;
    bufferingHints?: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat?: CompressionFormatEnum;
    encryptionConfiguration?: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    roleArn?: string;
}
