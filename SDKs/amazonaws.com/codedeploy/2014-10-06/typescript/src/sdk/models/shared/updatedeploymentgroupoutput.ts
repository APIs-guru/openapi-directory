import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroup } from "./autoscalinggroup";


// UpdateDeploymentGroupOutput
/** 
 * Represents the output of an <code>UpdateDeploymentGroup</code> operation.
**/
export class UpdateDeploymentGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hooksNotCleanedUp", elemType: shared.AutoScalingGroup })
  hooksNotCleanedUp?: AutoScalingGroup[];
}
