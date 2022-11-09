import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicStatusEnum } from "./topicstatusenum";


// EventTopic
/** 
 * Information about Amazon SNS topic and Directory Service directory associations.
**/
export class EventTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDateTime" })
  createdDateTime?: Date;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: TopicStatusEnum;

  @Metadata({ data: "json, name=TopicArn" })
  topicArn?: string;

  @Metadata({ data: "json, name=TopicName" })
  topicName?: string;
}
