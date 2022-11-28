import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deployment status of the instances in the deployment.
**/
export declare class DeploymentOverview extends SpeakeasyBase {
    failed?: number;
    inProgress?: number;
    pending?: number;
    ready?: number;
    skipped?: number;
    succeeded?: number;
}
