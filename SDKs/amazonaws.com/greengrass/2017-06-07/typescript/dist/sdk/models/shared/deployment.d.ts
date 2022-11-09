import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
/**
 * Information about a deployment.
**/
export declare class Deployment extends SpeakeasyBase {
    createdAt?: string;
    deploymentArn?: string;
    deploymentId?: string;
    deploymentType?: DeploymentTypeEnum;
    groupArn?: string;
}
