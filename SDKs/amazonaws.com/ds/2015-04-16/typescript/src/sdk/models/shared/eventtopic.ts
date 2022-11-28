import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicStatusEnum } from "./topicstatusenum";



// EventTopic
/** 
 * Information about Amazon SNS topic and Directory Service directory associations.
**/
export class EventTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDateTime" })
  createdDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TopicStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TopicArn" })
  topicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TopicName" })
  topicName?: string;
}
