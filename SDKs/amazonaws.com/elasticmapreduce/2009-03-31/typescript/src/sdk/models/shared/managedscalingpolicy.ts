import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeLimits } from "./computelimits";



// ManagedScalingPolicy
/** 
 *  Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
**/
export class ManagedScalingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeLimits" })
  computeLimits?: ComputeLimits;
}
