import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstanceRecurrence } from "./scheduledinstancerecurrence";



// ScheduledInstance
/** 
 * Describes a Scheduled Instance.
**/
export class ScheduledInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  hourlyPrice?: string;

  @SpeakeasyMetadata()
  instanceCount?: number;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  networkPlatform?: string;

  @SpeakeasyMetadata()
  nextSlotStartTime?: Date;

  @SpeakeasyMetadata()
  platform?: string;

  @SpeakeasyMetadata()
  previousSlotEndTime?: Date;

  @SpeakeasyMetadata()
  recurrence?: ScheduledInstanceRecurrence;

  @SpeakeasyMetadata()
  scheduledInstanceId?: string;

  @SpeakeasyMetadata()
  slotDurationInHours?: number;

  @SpeakeasyMetadata()
  termEndDate?: Date;

  @SpeakeasyMetadata()
  termStartDate?: Date;

  @SpeakeasyMetadata()
  totalScheduledInstanceHours?: number;
}
