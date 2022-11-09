import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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


// Action
/** 
 * Describes the actions associated with a rule.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudwatchAlarm" })
  cloudwatchAlarm?: CloudwatchAlarmAction;

  @Metadata({ data: "json, name=cloudwatchLogs" })
  cloudwatchLogs?: CloudwatchLogsAction;

  @Metadata({ data: "json, name=cloudwatchMetric" })
  cloudwatchMetric?: CloudwatchMetricAction;

  @Metadata({ data: "json, name=dynamoDB" })
  dynamoDb?: DynamoDbAction;

  @Metadata({ data: "json, name=dynamoDBv2" })
  dynamoDBv2?: DynamoDBv2Action;

  @Metadata({ data: "json, name=elasticsearch" })
  elasticsearch?: ElasticsearchAction;

  @Metadata({ data: "json, name=firehose" })
  firehose?: FirehoseAction;

  @Metadata({ data: "json, name=http" })
  http?: HttpAction;

  @Metadata({ data: "json, name=iotAnalytics" })
  iotAnalytics?: IotAnalyticsAction;

  @Metadata({ data: "json, name=iotEvents" })
  iotEvents?: IotEventsAction;

  @Metadata({ data: "json, name=iotSiteWise" })
  iotSiteWise?: IotSiteWiseAction;

  @Metadata({ data: "json, name=kafka" })
  kafka?: KafkaAction;

  @Metadata({ data: "json, name=kinesis" })
  kinesis?: KinesisAction;

  @Metadata({ data: "json, name=lambda" })
  lambda?: LambdaAction;

  @Metadata({ data: "json, name=openSearch" })
  openSearch?: OpenSearchAction;

  @Metadata({ data: "json, name=republish" })
  republish?: RepublishAction;

  @Metadata({ data: "json, name=s3" })
  s3?: S3Action;

  @Metadata({ data: "json, name=salesforce" })
  salesforce?: SalesforceAction;

  @Metadata({ data: "json, name=sns" })
  sns?: SnsAction;

  @Metadata({ data: "json, name=sqs" })
  sqs?: SqsAction;

  @Metadata({ data: "json, name=stepFunctions" })
  stepFunctions?: StepFunctionsAction;

  @Metadata({ data: "json, name=timestream" })
  timestream?: TimestreamAction;
}
