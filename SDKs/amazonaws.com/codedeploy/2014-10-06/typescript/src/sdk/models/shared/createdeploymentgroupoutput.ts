import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDeploymentGroupOutput
/** 
 * Represents the output of a <code>CreateDeploymentGroup</code> operation.
**/
export class CreateDeploymentGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentGroupId" })
  deploymentGroupId?: string;
}
