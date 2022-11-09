import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClearTimerAction } from "./cleartimeraction";
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { FirehoseAction } from "./firehoseaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { IotTopicPublishAction } from "./iottopicpublishaction";
import { LambdaAction } from "./lambdaaction";
import { ResetTimerAction } from "./resettimeraction";
import { SetTimerAction } from "./settimeraction";
import { SetVariableAction } from "./setvariableaction";
import { SnsTopicPublishAction } from "./snstopicpublishaction";
import { SqsAction } from "./sqsaction";


// Action
/** 
 * An action to be performed when the <code>condition</code> is TRUE.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=clearTimer" })
  clearTimer?: ClearTimerAction;

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

  @Metadata({ data: "json, name=resetTimer" })
  resetTimer?: ResetTimerAction;

  @Metadata({ data: "json, name=setTimer" })
  setTimer?: SetTimerAction;

  @Metadata({ data: "json, name=setVariable" })
  setVariable?: SetVariableAction;

  @Metadata({ data: "json, name=sns" })
  sns?: SnsTopicPublishAction;

  @Metadata({ data: "json, name=sqs" })
  sqs?: SqsAction;
}
