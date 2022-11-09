import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicStatusEnum } from "./topicstatusenum";
/**
 * Information about Amazon SNS topic and Directory Service directory associations.
**/
export declare class EventTopic extends SpeakeasyBase {
    createdDateTime?: Date;
    directoryId?: string;
    status?: TopicStatusEnum;
    topicArn?: string;
    topicName?: string;
}
