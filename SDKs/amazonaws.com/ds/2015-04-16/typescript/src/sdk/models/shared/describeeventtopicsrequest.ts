import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeEventTopicsRequest
/** 
 * Describes event topics.
**/
export class DescribeEventTopicsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=TopicNames" })
  topicNames?: string[];
}
