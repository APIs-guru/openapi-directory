import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
**/
export declare class BatchGetDeploymentGroupsInput extends SpeakeasyBase {
    applicationName: string;
    deploymentGroupNames: string[];
}
