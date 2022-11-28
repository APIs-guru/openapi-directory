import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a scheduled scaling action.
**/
export declare class ScheduledUpdateGroupAction extends SpeakeasyBase {
    autoScalingGroupName?: string;
    desiredCapacity?: number;
    endTime?: Date;
    maxSize?: number;
    minSize?: number;
    recurrence?: string;
    scheduledActionArn?: string;
    scheduledActionName?: string;
    startTime?: Date;
    time?: Date;
    timeZone?: string;
}
