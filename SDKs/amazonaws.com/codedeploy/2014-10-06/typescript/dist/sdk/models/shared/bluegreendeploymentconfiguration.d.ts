import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentReadyOption } from "./deploymentreadyoption";
import { GreenFleetProvisioningOption } from "./greenfleetprovisioningoption";
import { BlueInstanceTerminationOption } from "./blueinstanceterminationoption";
/**
 * Information about blue/green deployment options for a deployment group.
**/
export declare class BlueGreenDeploymentConfiguration extends SpeakeasyBase {
    deploymentReadyOption?: DeploymentReadyOption;
    greenFleetProvisioningOption?: GreenFleetProvisioningOption;
    terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
}
