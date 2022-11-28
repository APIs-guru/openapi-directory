import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentOptionEnum } from "./deploymentoptionenum";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
/**
 * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
**/
export declare class DeploymentStyle extends SpeakeasyBase {
    deploymentOption?: DeploymentOptionEnum;
    deploymentType?: DeploymentTypeEnum;
}
