import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentGroupInfo } from "./deploymentgroupinfo";


// GetDeploymentGroupOutput
/** 
 * Represents the output of a <code>GetDeploymentGroup</code> operation.
**/
export class GetDeploymentGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentGroupInfo" })
  deploymentGroupInfo?: DeploymentGroupInfo;
}
