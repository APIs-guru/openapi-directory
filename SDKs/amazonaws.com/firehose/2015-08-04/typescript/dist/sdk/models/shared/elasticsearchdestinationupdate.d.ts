import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Describes an update for a destination in Amazon ES.
**/
export declare class ElasticsearchDestinationUpdate extends SpeakeasyBase {
    bufferingHints?: ElasticsearchBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainArn?: string;
    indexName?: string;
    indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: ElasticsearchRetryOptions;
    roleArn?: string;
    s3Update?: S3DestinationUpdate;
    typeName?: string;
}
