import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentGroupInfo } from "./deploymentgroupinfo";
/**
 * Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
**/
export declare class BatchGetDeploymentGroupsOutput extends SpeakeasyBase {
    deploymentGroupsInfo?: DeploymentGroupInfo[];
    errorMessage?: string;
}
