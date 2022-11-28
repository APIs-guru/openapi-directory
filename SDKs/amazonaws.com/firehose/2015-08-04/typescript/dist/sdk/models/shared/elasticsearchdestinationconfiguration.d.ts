import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ElasticsearchS3BackupModeEnum } from "./elasticsearchs3backupmodeenum";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
/**
 * Describes the configuration of a destination in Amazon ES.
**/
export declare class ElasticsearchDestinationConfiguration extends SpeakeasyBase {
    bufferingHints?: ElasticsearchBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainArn?: string;
    indexName: string;
    indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: ElasticsearchRetryOptions;
    roleArn: string;
    s3BackupMode?: ElasticsearchS3BackupModeEnum;
    s3Configuration: S3DestinationConfiguration;
    typeName?: string;
    vpcConfiguration?: VpcConfiguration;
}
