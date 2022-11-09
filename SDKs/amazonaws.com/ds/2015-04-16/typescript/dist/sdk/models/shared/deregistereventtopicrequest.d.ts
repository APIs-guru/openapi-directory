import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
**/
export declare class DeregisterEventTopicRequest extends SpeakeasyBase {
    directoryId: string;
    topicName: string;
}
