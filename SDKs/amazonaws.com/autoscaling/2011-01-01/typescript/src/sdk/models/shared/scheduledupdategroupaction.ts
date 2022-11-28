import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduledUpdateGroupAction
/** 
 * Describes a scheduled scaling action.
**/
export class ScheduledUpdateGroupAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupName?: string;

  @SpeakeasyMetadata()
  desiredCapacity?: number;

  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  maxSize?: number;

  @SpeakeasyMetadata()
  minSize?: number;

  @SpeakeasyMetadata()
  recurrence?: string;

  @SpeakeasyMetadata()
  scheduledActionArn?: string;

  @SpeakeasyMetadata()
  scheduledActionName?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  time?: Date;

  @SpeakeasyMetadata()
  timeZone?: string;
}
