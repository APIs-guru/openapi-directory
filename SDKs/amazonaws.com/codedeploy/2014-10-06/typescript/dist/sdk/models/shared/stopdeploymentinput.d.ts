import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Represents the input of a <code>StopDeployment</code> operation.
**/
export declare class StopDeploymentInput extends SpeakeasyBase {
    autoRollbackEnabled?: boolean;
    deploymentId: string;
}
