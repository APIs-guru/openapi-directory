import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";



// Activity
/** 
 * Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
**/
export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId: string;

  @SpeakeasyMetadata()
  autoScalingGroupArn?: string;

  @SpeakeasyMetadata()
  autoScalingGroupName: string;

  @SpeakeasyMetadata()
  autoScalingGroupState?: string;

  @SpeakeasyMetadata()
  cause: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  details?: string;

  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  progress?: number;

  @SpeakeasyMetadata()
  startTime: Date;

  @SpeakeasyMetadata()
  statusCode: ScalingActivityStatusCodeEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
