import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of a <code>ListDeploymentGroups</code> operation.
**/
export declare class ListDeploymentGroupsOutput extends SpeakeasyBase {
    applicationName?: string;
    deploymentGroups?: string[];
    nextToken?: string;
}
