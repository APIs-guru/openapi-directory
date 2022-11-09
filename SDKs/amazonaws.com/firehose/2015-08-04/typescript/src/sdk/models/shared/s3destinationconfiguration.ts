import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { EncryptionConfiguration } from "./encryptionconfiguration";


// S3DestinationConfiguration
/** 
 * Describes the configuration of a destination in Amazon S3.
**/
export class S3DestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @Metadata({ data: "json, name=BufferingHints" })
  bufferingHints?: BufferingHints;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=CompressionFormat" })
  compressionFormat?: CompressionFormatEnum;

  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=ErrorOutputPrefix" })
  errorOutputPrefix?: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
