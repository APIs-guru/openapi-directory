import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstanceAvailability } from "./scheduledinstanceavailability";



// DescribeScheduledInstanceAvailabilityResult
/** 
 * Contains the output of DescribeScheduledInstanceAvailability.
**/
export class DescribeScheduledInstanceAvailabilityResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ScheduledInstanceAvailability })
  scheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];
}
