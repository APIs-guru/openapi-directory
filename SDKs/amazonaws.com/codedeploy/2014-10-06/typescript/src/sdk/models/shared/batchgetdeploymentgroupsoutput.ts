import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentGroupInfo } from "./deploymentgroupinfo";


// BatchGetDeploymentGroupsOutput
/** 
 * Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
**/
export class BatchGetDeploymentGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentGroupsInfo", elemType: shared.DeploymentGroupInfo })
  deploymentGroupsInfo?: DeploymentGroupInfo[];

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
