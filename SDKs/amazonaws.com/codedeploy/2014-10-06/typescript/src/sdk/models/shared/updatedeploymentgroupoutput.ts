import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";



// UpdateDeploymentGroupOutput
/** 
 * Represents the output of an <code>UpdateDeploymentGroup</code> operation.
**/
export class UpdateDeploymentGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hooksNotCleanedUp", elemType: AutoScalingGroup })
  hooksNotCleanedUp?: AutoScalingGroup[];
}
