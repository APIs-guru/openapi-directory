import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { S3DestinationUpdate } from "./s3destinationupdate";



// ElasticsearchDestinationUpdate
/** 
 * Describes an update for a destination in Amazon ES.
**/
export class ElasticsearchDestinationUpdate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=S3Update" })
  s3Update?: S3DestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;
}
