import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ElasticsearchS3BackupModeEnum } from "./elasticsearchs3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
/**
 * The destination description in Amazon ES.
**/
export declare class ElasticsearchDestinationDescription extends SpeakeasyBase {
    bufferingHints?: ElasticsearchBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainArn?: string;
    indexName?: string;
    indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: ElasticsearchRetryOptions;
    roleArn?: string;
    s3BackupMode?: ElasticsearchS3BackupModeEnum;
    s3DestinationDescription?: S3DestinationDescription;
    typeName?: string;
    vpcConfigurationDescription?: VpcConfigurationDescription;
}
