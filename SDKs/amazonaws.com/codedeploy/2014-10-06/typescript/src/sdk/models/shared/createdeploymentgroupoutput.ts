import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDeploymentGroupOutput
/** 
 * Represents the output of a <code>CreateDeploymentGroup</code> operation.
**/
export class CreateDeploymentGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentGroupId" })
  deploymentGroupId?: string;
}
