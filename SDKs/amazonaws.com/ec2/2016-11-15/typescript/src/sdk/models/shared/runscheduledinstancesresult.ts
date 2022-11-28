import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunScheduledInstancesResult
/** 
 * Contains the output of RunScheduledInstances.
**/
export class RunScheduledInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceIdSet?: string[];
}
