import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationTarget } from "./cloudformationtarget";
import { DeploymentTargetTypeEnum } from "./deploymenttargettypeenum";
import { EcsTarget } from "./ecstarget";
import { InstanceTarget } from "./instancetarget";
import { LambdaTarget } from "./lambdatarget";
/**
 *  Information about the deployment target.
**/
export declare class DeploymentTarget extends SpeakeasyBase {
    cloudFormationTarget?: CloudFormationTarget;
    deploymentTargetType?: DeploymentTargetTypeEnum;
    ecsTarget?: EcsTarget;
    instanceTarget?: InstanceTarget;
    lambdaTarget?: LambdaTarget;
}
