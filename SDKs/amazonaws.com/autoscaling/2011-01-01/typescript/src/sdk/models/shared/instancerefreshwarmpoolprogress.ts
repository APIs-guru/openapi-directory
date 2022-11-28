import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceRefreshWarmPoolProgress
/** 
 * Reports the progress of an instance refresh on instances that are in the warm pool.
**/
export class InstanceRefreshWarmPoolProgress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instancesToUpdate?: number;

  @SpeakeasyMetadata()
  percentageComplete?: number;
}
