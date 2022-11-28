import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentGroupInfo } from "./deploymentgroupinfo";



// BatchGetDeploymentGroupsOutput
/** 
 * Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
**/
export class BatchGetDeploymentGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentGroupsInfo", elemType: DeploymentGroupInfo })
  deploymentGroupsInfo?: DeploymentGroupInfo[];

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
