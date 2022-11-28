import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";



// DeleteDeploymentGroupOutput
/** 
 * Represents the output of a <code>DeleteDeploymentGroup</code> operation.
**/
export class DeleteDeploymentGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hooksNotCleanedUp", elemType: AutoScalingGroup })
  hooksNotCleanedUp?: AutoScalingGroup[];
}
