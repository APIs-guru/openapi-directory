import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceRefreshLivePoolProgress
/** 
 * Reports the progress of an instance refresh on instances that are in the Auto Scaling group.
**/
export class InstanceRefreshLivePoolProgress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instancesToUpdate?: number;

  @SpeakeasyMetadata()
  percentageComplete?: number;
}
