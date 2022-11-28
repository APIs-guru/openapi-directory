import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
