import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a deployment rollback.
**/
export declare class RollbackInfo extends SpeakeasyBase {
    rollbackDeploymentId?: string;
    rollbackMessage?: string;
    rollbackTriggeringDeploymentId?: string;
}
