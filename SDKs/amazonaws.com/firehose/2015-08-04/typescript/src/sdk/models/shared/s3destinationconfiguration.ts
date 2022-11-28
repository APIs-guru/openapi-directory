import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { EncryptionConfiguration } from "./encryptionconfiguration";



// S3DestinationConfiguration
/** 
 * Describes the configuration of a destination in Amazon S3.
**/
export class S3DestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=BufferingHints" })
  bufferingHints?: BufferingHints;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=CompressionFormat" })
  compressionFormat?: CompressionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ErrorOutputPrefix" })
  errorOutputPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
