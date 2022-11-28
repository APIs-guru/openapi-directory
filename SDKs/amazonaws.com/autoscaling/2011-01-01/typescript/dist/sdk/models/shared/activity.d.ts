import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";
/**
 * Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
**/
export declare class Activity extends SpeakeasyBase {
    activityId: string;
    autoScalingGroupArn?: string;
    autoScalingGroupName: string;
    autoScalingGroupState?: string;
    cause: string;
    description?: string;
    details?: string;
    endTime?: Date;
    progress?: number;
    startTime: Date;
    statusCode: ScalingActivityStatusCodeEnum;
    statusMessage?: string;
}
