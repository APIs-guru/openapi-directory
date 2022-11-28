import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentReadyActionEnum } from "./deploymentreadyactionenum";



// DeploymentReadyOption
/** 
 * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
**/
export class DeploymentReadyOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionOnTimeout" })
  actionOnTimeout?: DeploymentReadyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=waitTimeInMinutes" })
  waitTimeInMinutes?: number;
}
