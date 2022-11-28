import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstanceRecurrence } from "./scheduledinstancerecurrence";
/**
 * Describes a Scheduled Instance.
**/
export declare class ScheduledInstance extends SpeakeasyBase {
    availabilityZone?: string;
    createDate?: Date;
    hourlyPrice?: string;
    instanceCount?: number;
    instanceType?: string;
    networkPlatform?: string;
    nextSlotStartTime?: Date;
    platform?: string;
    previousSlotEndTime?: Date;
    recurrence?: ScheduledInstanceRecurrence;
    scheduledInstanceId?: string;
    slotDurationInHours?: number;
    termEndDate?: Date;
    termStartDate?: Date;
    totalScheduledInstanceHours?: number;
}
