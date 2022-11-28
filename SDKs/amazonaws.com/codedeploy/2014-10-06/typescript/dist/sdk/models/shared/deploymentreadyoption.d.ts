import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentReadyActionEnum } from "./deploymentreadyactionenum";
/**
 * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
**/
export declare class DeploymentReadyOption extends SpeakeasyBase {
    actionOnTimeout?: DeploymentReadyActionEnum;
    waitTimeInMinutes?: number;
}
