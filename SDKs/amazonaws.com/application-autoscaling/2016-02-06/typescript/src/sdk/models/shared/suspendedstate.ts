import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuspendedState
/** 
 * Specifies whether the scaling activities for a scalable target are in a suspended state. 
**/
export class SuspendedState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DynamicScalingInSuspended" })
  dynamicScalingInSuspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DynamicScalingOutSuspended" })
  dynamicScalingOutSuspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ScheduledScalingSuspended" })
  scheduledScalingSuspended?: boolean;
}
