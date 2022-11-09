import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=BufferingHints" })
  bufferingHints?: ElasticsearchBufferingHints;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=ClusterEndpoint" })
  clusterEndpoint?: string;

  @Metadata({ data: "json, name=DomainARN" })
  domainArn?: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=IndexRotationPeriod" })
  indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RetryOptions" })
  retryOptions?: ElasticsearchRetryOptions;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: ElasticsearchS3BackupModeEnum;

  @Metadata({ data: "json, name=S3Configuration" })
  s3Configuration: S3DestinationConfiguration;

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;

  @Metadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
