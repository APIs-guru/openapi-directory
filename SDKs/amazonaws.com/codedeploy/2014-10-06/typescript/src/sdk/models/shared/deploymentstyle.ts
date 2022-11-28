import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentOptionEnum } from "./deploymentoptionenum";
import { DeploymentTypeEnum } from "./deploymenttypeenum";



// DeploymentStyle
/** 
 * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
**/
export class DeploymentStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentOption" })
  deploymentOption?: DeploymentOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=deploymentType" })
  deploymentType?: DeploymentTypeEnum;
}
