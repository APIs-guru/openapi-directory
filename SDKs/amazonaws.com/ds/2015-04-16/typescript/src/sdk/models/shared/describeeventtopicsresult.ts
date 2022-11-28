import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTopic } from "./eventtopic";



// DescribeEventTopicsResult
/** 
 * The result of a DescribeEventTopic request.
**/
export class DescribeEventTopicsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventTopics", elemType: EventTopic })
  eventTopics?: EventTopic[];
}
