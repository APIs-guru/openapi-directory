import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ElasticsearchS3BackupModeEnum } from "./elasticsearchs3backupmodeenum";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";



// ElasticsearchDestinationConfiguration
/** 
 * Describes the configuration of a destination in Amazon ES.
**/
export class ElasticsearchDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BufferingHints" })
  bufferingHints?: ElasticsearchBufferingHints;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=ClusterEndpoint" })
  clusterEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainARN" })
  domainArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=IndexRotationPeriod" })
  indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: ElasticsearchRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: ElasticsearchS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Configuration" })
  s3Configuration: S3DestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
