import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * An action to be performed when the <code>condition</code> is TRUE.
**/
export declare class Action extends SpeakeasyBase {
    clearTimer?: ClearTimerAction;
    dynamoDb?: DynamoDbAction;
    dynamoDBv2?: DynamoDBv2Action;
    firehose?: FirehoseAction;
    iotEvents?: IotEventsAction;
    iotSiteWise?: IotSiteWiseAction;
    iotTopicPublish?: IotTopicPublishAction;
    lambda?: LambdaAction;
    resetTimer?: ResetTimerAction;
    setTimer?: SetTimerAction;
    setVariable?: SetVariableAction;
    sns?: SnsTopicPublishAction;
    sqs?: SqsAction;
}
