import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterEventTopicRequest
/** 
 * Registers a new event topic.
**/
export class RegisterEventTopicRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=TopicName" })
  topicName: string;
}
