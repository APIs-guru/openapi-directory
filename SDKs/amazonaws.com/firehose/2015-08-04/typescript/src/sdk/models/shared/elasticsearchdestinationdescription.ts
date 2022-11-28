import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=BufferingHints" })
  bufferingHints?: ElasticsearchBufferingHints;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" })
  cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=ClusterEndpoint" })
  clusterEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainARN" })
  domainArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexRotationPeriod" })
  indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" })
  processingConfiguration?: ProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetryOptions" })
  retryOptions?: ElasticsearchRetryOptions;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BackupMode" })
  s3BackupMode?: ElasticsearchS3BackupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationDescription" })
  vpcConfigurationDescription?: VpcConfigurationDescription;
}
