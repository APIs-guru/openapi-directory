import { SpeakeasyBase } from "../../../internal/utils";
import { CloudwatchAlarmAction } from "./cloudwatchalarmaction";
import { CloudwatchLogsAction } from "./cloudwatchlogsaction";
import { CloudwatchMetricAction } from "./cloudwatchmetricaction";
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { ElasticsearchAction } from "./elasticsearchaction";
import { FirehoseAction } from "./firehoseaction";
import { HttpAction } from "./httpaction";
import { IotAnalyticsAction } from "./iotanalyticsaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { KafkaAction } from "./kafkaaction";
import { KinesisAction } from "./kinesisaction";
import { LambdaAction } from "./lambdaaction";
import { OpenSearchAction } from "./opensearchaction";
import { RepublishAction } from "./republishaction";
import { S3Action } from "./s3action";
import { SalesforceAction } from "./salesforceaction";
import { SnsAction } from "./snsaction";
import { SqsAction } from "./sqsaction";
import { StepFunctionsAction } from "./stepfunctionsaction";
import { TimestreamAction } from "./timestreamaction";
/**
 * Describes the actions associated with a rule.
**/
export declare class Action extends SpeakeasyBase {
    cloudwatchAlarm?: CloudwatchAlarmAction;
    cloudwatchLogs?: CloudwatchLogsAction;
    cloudwatchMetric?: CloudwatchMetricAction;
    dynamoDb?: DynamoDbAction;
    dynamoDBv2?: DynamoDBv2Action;
    elasticsearch?: ElasticsearchAction;
    firehose?: FirehoseAction;
    http?: HttpAction;
    iotAnalytics?: IotAnalyticsAction;
    iotEvents?: IotEventsAction;
    iotSiteWise?: IotSiteWiseAction;
    kafka?: KafkaAction;
    kinesis?: KinesisAction;
    lambda?: LambdaAction;
    openSearch?: OpenSearchAction;
    republish?: RepublishAction;
    s3?: S3Action;
    salesforce?: SalesforceAction;
    sns?: SnsAction;
    sqs?: SqsAction;
    stepFunctions?: StepFunctionsAction;
    timestream?: TimestreamAction;
}
