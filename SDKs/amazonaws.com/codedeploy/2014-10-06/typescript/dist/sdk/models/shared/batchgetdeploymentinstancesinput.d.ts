import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Represents the input of a <code>BatchGetDeploymentInstances</code> operation.
**/
export declare class BatchGetDeploymentInstancesInput extends SpeakeasyBase {
    deploymentId: string;
    instanceIds: string[];
}
