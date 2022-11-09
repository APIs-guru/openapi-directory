import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { FirehoseAction } from "./firehoseaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { IotTopicPublishAction } from "./iottopicpublishaction";
import { LambdaAction } from "./lambdaaction";
import { SnsTopicPublishAction } from "./snstopicpublishaction";
import { SqsAction } from "./sqsaction";
/**
 * Specifies one of the following actions to receive notifications when the alarm state changes.
**/
export declare class AlarmAction extends SpeakeasyBase {
    dynamoDb?: DynamoDbAction;
    dynamoDBv2?: DynamoDBv2Action;
    firehose?: FirehoseAction;
    iotEvents?: IotEventsAction;
    iotSiteWise?: IotSiteWiseAction;
    iotTopicPublish?: IotTopicPublishAction;
    lambda?: LambdaAction;
    sns?: SnsTopicPublishAction;
    sqs?: SqsAction;
}
