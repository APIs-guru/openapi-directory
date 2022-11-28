import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentGroupInfo } from "./deploymentgroupinfo";



// GetDeploymentGroupOutput
/** 
 * Represents the output of a <code>GetDeploymentGroup</code> operation.
**/
export class GetDeploymentGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentGroupInfo" })
  deploymentGroupInfo?: DeploymentGroupInfo;
}
