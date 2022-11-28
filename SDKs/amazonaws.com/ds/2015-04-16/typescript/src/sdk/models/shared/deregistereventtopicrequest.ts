import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeregisterEventTopicRequest
/** 
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
**/
export class DeregisterEventTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=TopicName" })
  topicName: string;
}
