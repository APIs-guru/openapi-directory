import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterEventTopicRequest
/** 
 * Registers a new event topic.
**/
export class RegisterEventTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=TopicName" })
  topicName: string;
}
