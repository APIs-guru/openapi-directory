import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeregisterEventTopicRequest
/** 
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
**/
export class DeregisterEventTopicRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=TopicName" })
  topicName: string;
}
