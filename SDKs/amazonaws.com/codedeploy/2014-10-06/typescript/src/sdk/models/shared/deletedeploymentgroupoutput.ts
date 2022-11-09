import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroup } from "./autoscalinggroup";


// DeleteDeploymentGroupOutput
/** 
 * Represents the output of a <code>DeleteDeploymentGroup</code> operation.
**/
export class DeleteDeploymentGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hooksNotCleanedUp", elemType: shared.AutoScalingGroup })
  hooksNotCleanedUp?: AutoScalingGroup[];
}
