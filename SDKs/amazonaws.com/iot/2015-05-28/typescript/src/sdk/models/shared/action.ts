import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=cloudwatchAlarm" })
  cloudwatchAlarm?: CloudwatchAlarmAction;

  @SpeakeasyMetadata({ data: "json, name=cloudwatchLogs" })
  cloudwatchLogs?: CloudwatchLogsAction;

  @SpeakeasyMetadata({ data: "json, name=cloudwatchMetric" })
  cloudwatchMetric?: CloudwatchMetricAction;

  @SpeakeasyMetadata({ data: "json, name=dynamoDB" })
  dynamoDb?: DynamoDbAction;

  @SpeakeasyMetadata({ data: "json, name=dynamoDBv2" })
  dynamoDBv2?: DynamoDBv2Action;

  @SpeakeasyMetadata({ data: "json, name=elasticsearch" })
  elasticsearch?: ElasticsearchAction;

  @SpeakeasyMetadata({ data: "json, name=firehose" })
  firehose?: FirehoseAction;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: HttpAction;

  @SpeakeasyMetadata({ data: "json, name=iotAnalytics" })
  iotAnalytics?: IotAnalyticsAction;

  @SpeakeasyMetadata({ data: "json, name=iotEvents" })
  iotEvents?: IotEventsAction;

  @SpeakeasyMetadata({ data: "json, name=iotSiteWise" })
  iotSiteWise?: IotSiteWiseAction;

  @SpeakeasyMetadata({ data: "json, name=kafka" })
  kafka?: KafkaAction;

  @SpeakeasyMetadata({ data: "json, name=kinesis" })
  kinesis?: KinesisAction;

  @SpeakeasyMetadata({ data: "json, name=lambda" })
  lambda?: LambdaAction;

  @SpeakeasyMetadata({ data: "json, name=openSearch" })
  openSearch?: OpenSearchAction;

  @SpeakeasyMetadata({ data: "json, name=republish" })
  republish?: RepublishAction;

  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3?: S3Action;

  @SpeakeasyMetadata({ data: "json, name=salesforce" })
  salesforce?: SalesforceAction;

  @SpeakeasyMetadata({ data: "json, name=sns" })
  sns?: SnsAction;

  @SpeakeasyMetadata({ data: "json, name=sqs" })
  sqs?: SqsAction;

  @SpeakeasyMetadata({ data: "json, name=stepFunctions" })
  stepFunctions?: StepFunctionsAction;

  @SpeakeasyMetadata({ data: "json, name=timestream" })
  timestream?: TimestreamAction;
}
