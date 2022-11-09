import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=cloudFormationTarget" })
  cloudFormationTarget?: CloudFormationTarget;

  @Metadata({ data: "json, name=deploymentTargetType" })
  deploymentTargetType?: DeploymentTargetTypeEnum;

  @Metadata({ data: "json, name=ecsTarget" })
  ecsTarget?: EcsTarget;

  @Metadata({ data: "json, name=instanceTarget" })
  instanceTarget?: InstanceTarget;

  @Metadata({ data: "json, name=lambdaTarget" })
  lambdaTarget?: LambdaTarget;
}
