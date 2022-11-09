import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { FirehoseAction } from "./firehoseaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { IotTopicPublishAction } from "./iottopicpublishaction";
import { LambdaAction } from "./lambdaaction";
import { SnsTopicPublishAction } from "./snstopicpublishaction";
import { SqsAction } from "./sqsaction";


// AlarmAction
/** 
 * Specifies one of the following actions to receive notifications when the alarm state changes.
**/
export class AlarmAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamoDB" })
  dynamoDb?: DynamoDbAction;

  @Metadata({ data: "json, name=dynamoDBv2" })
  dynamoDBv2?: DynamoDBv2Action;

  @Metadata({ data: "json, name=firehose" })
  firehose?: FirehoseAction;

  @Metadata({ data: "json, name=iotEvents" })
  iotEvents?: IotEventsAction;

  @Metadata({ data: "json, name=iotSiteWise" })
  iotSiteWise?: IotSiteWiseAction;

  @Metadata({ data: "json, name=iotTopicPublish" })
  iotTopicPublish?: IotTopicPublishAction;

  @Metadata({ data: "json, name=lambda" })
  lambda?: LambdaAction;

  @Metadata({ data: "json, name=sns" })
  sns?: SnsTopicPublishAction;

  @Metadata({ data: "json, name=sqs" })
  sqs?: SqsAction;
}
