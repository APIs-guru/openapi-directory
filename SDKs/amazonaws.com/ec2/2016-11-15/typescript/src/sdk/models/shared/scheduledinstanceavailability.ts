import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstanceRecurrence } from "./scheduledinstancerecurrence";



// ScheduledInstanceAvailability
/** 
 * Describes a schedule that is available for your Scheduled Instances.
**/
export class ScheduledInstanceAvailability extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  availableInstanceCount?: number;

  @SpeakeasyMetadata()
  firstSlotStartTime?: Date;

  @SpeakeasyMetadata()
  hourlyPrice?: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  maxTermDurationInDays?: number;

  @SpeakeasyMetadata()
  minTermDurationInDays?: number;

  @SpeakeasyMetadata()
  networkPlatform?: string;

  @SpeakeasyMetadata()
  platform?: string;

  @SpeakeasyMetadata()
  purchaseToken?: string;

  @SpeakeasyMetadata()
  recurrence?: ScheduledInstanceRecurrence;

  @SpeakeasyMetadata()
  slotDurationInHours?: number;

  @SpeakeasyMetadata()
  totalScheduledInstanceHours?: number;
}
