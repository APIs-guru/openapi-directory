import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * Information about the most recent attempted or successful deployment to a deployment group.
**/
export declare class LastDeploymentInfo extends SpeakeasyBase {
    createTime?: Date;
    deploymentId?: string;
    endTime?: Date;
    status?: DeploymentStatusEnum;
}
