import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentReadyOption } from "./deploymentreadyoption";
import { GreenFleetProvisioningOption } from "./greenfleetprovisioningoption";
import { BlueInstanceTerminationOption } from "./blueinstanceterminationoption";


// BlueGreenDeploymentConfiguration
/** 
 * Information about blue/green deployment options for a deployment group.
**/
export class BlueGreenDeploymentConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentReadyOption" })
  deploymentReadyOption?: DeploymentReadyOption;

  @Metadata({ data: "json, name=greenFleetProvisioningOption" })
  greenFleetProvisioningOption?: GreenFleetProvisioningOption;

  @Metadata({ data: "json, name=terminateBlueInstancesOnDeploymentSuccess" })
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
}
