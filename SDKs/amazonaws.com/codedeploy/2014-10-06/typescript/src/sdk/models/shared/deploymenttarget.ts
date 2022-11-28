import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationTarget } from "./cloudformationtarget";
import { DeploymentTargetTypeEnum } from "./deploymenttargettypeenum";
import { EcsTarget } from "./ecstarget";
import { InstanceTarget } from "./instancetarget";
import { LambdaTarget } from "./lambdatarget";



// DeploymentTarget
/** 
 *  Information about the deployment target. 
**/
export class DeploymentTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudFormationTarget" })
  cloudFormationTarget?: CloudFormationTarget;

  @SpeakeasyMetadata({ data: "json, name=deploymentTargetType" })
  deploymentTargetType?: DeploymentTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ecsTarget" })
  ecsTarget?: EcsTarget;

  @SpeakeasyMetadata({ data: "json, name=instanceTarget" })
  instanceTarget?: InstanceTarget;

  @SpeakeasyMetadata({ data: "json, name=lambdaTarget" })
  lambdaTarget?: LambdaTarget;
}
