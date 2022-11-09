import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ElasticsearchS3BackupModeEnum } from "./elasticsearchs3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";


// ElasticsearchDestinationDescription
/** 
 * The destination description in Amazon ES.
**/
export class ElasticsearchDestinationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BufferingHints" })
  bufferingHints?: ElasticsearchBufferingHints;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @Metadata({ data: "json, name=ClusterEndpoint" })
  clusterEndpoint?: string;

  @Metadata({ data: "json, name=DomainARN" })
  domainArn?: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=IndexRotationPeriod" })
  indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;

  @Metadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @Metadata({ data: "json, name=RetryOptions" })
  retryOptions?: ElasticsearchRetryOptions;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: ElasticsearchS3BackupModeEnum;

  @Metadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;

  @Metadata({ data: "json, name=VpcConfigurationDescription" })
  vpcConfigurationDescription?: VpcConfigurationDescription;
}
