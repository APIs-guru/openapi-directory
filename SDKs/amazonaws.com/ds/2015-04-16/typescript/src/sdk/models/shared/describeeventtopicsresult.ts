import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventTopic } from "./eventtopic";


// DescribeEventTopicsResult
/** 
 * The result of a DescribeEventTopic request.
**/
export class DescribeEventTopicsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventTopics", elemType: shared.EventTopic })
  eventTopics?: EventTopic[];
}
