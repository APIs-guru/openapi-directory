import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentReadyActionEnum } from "./deploymentreadyactionenum";


// DeploymentReadyOption
/** 
 * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
**/
export class DeploymentReadyOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionOnTimeout" })
  actionOnTimeout?: DeploymentReadyActionEnum;

  @Metadata({ data: "json, name=waitTimeInMinutes" })
  waitTimeInMinutes?: number;
}
