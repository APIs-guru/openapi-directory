import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuspendedState
/** 
 * Specifies whether the scaling activities for a scalable target are in a suspended state. 
**/
export class SuspendedState extends SpeakeasyBase {
  @Metadata({ data: "json, name=DynamicScalingInSuspended" })
  dynamicScalingInSuspended?: boolean;

  @Metadata({ data: "json, name=DynamicScalingOutSuspended" })
  dynamicScalingOutSuspended?: boolean;

  @Metadata({ data: "json, name=ScheduledScalingSuspended" })
  scheduledScalingSuspended?: boolean;
}
