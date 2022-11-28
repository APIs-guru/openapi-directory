import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstanceRecurrence } from "./scheduledinstancerecurrence";
/**
 * Describes a schedule that is available for your Scheduled Instances.
**/
export declare class ScheduledInstanceAvailability extends SpeakeasyBase {
    availabilityZone?: string;
    availableInstanceCount?: number;
    firstSlotStartTime?: Date;
    hourlyPrice?: string;
    instanceType?: string;
    maxTermDurationInDays?: number;
    minTermDurationInDays?: number;
    networkPlatform?: string;
    platform?: string;
    purchaseToken?: string;
    recurrence?: ScheduledInstanceRecurrence;
    slotDurationInHours?: number;
    totalScheduledInstanceHours?: number;
}
