import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
export declare class UpdateDeploymentResponse extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
