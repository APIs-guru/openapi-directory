import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstance } from "./scheduledinstance";



// DescribeScheduledInstancesResult
/** 
 * Contains the output of DescribeScheduledInstances.
**/
export class DescribeScheduledInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ScheduledInstance })
  scheduledInstanceSet?: ScheduledInstance[];
}
