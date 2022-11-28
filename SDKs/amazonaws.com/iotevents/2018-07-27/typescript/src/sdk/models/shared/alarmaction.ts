import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=dynamoDB" })
  dynamoDb?: DynamoDbAction;

  @SpeakeasyMetadata({ data: "json, name=dynamoDBv2" })
  dynamoDBv2?: DynamoDBv2Action;

  @SpeakeasyMetadata({ data: "json, name=firehose" })
  firehose?: FirehoseAction;

  @SpeakeasyMetadata({ data: "json, name=iotEvents" })
  iotEvents?: IotEventsAction;

  @SpeakeasyMetadata({ data: "json, name=iotSiteWise" })
  iotSiteWise?: IotSiteWiseAction;

  @SpeakeasyMetadata({ data: "json, name=iotTopicPublish" })
  iotTopicPublish?: IotTopicPublishAction;

  @SpeakeasyMetadata({ data: "json, name=lambda" })
  lambda?: LambdaAction;

  @SpeakeasyMetadata({ data: "json, name=sns" })
  sns?: SnsTopicPublishAction;

  @SpeakeasyMetadata({ data: "json, name=sqs" })
  sqs?: SqsAction;
}
