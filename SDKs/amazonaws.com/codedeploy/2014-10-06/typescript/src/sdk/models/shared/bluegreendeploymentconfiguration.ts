import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentReadyOption } from "./deploymentreadyoption";
import { GreenFleetProvisioningOption } from "./greenfleetprovisioningoption";
import { BlueInstanceTerminationOption } from "./blueinstanceterminationoption";



// BlueGreenDeploymentConfiguration
/** 
 * Information about blue/green deployment options for a deployment group.
**/
export class BlueGreenDeploymentConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentReadyOption" })
  deploymentReadyOption?: DeploymentReadyOption;

  @SpeakeasyMetadata({ data: "json, name=greenFleetProvisioningOption" })
  greenFleetProvisioningOption?: GreenFleetProvisioningOption;

  @SpeakeasyMetadata({ data: "json, name=terminateBlueInstancesOnDeploymentSuccess" })
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
}
