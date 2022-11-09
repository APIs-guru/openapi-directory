import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * Contains information about a deployment.
**/
export declare class Deployment extends SpeakeasyBase {
    creationTimestamp?: Date;
    deploymentId?: string;
    deploymentName?: string;
    deploymentStatus?: DeploymentStatusEnum;
    isLatestForTarget?: boolean;
    revisionId?: string;
    targetArn?: string;
}
