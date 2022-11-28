import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeEventTopicsRequest
/** 
 * Describes event topics.
**/
export class DescribeEventTopicsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=TopicNames" })
  topicNames?: string[];
}
