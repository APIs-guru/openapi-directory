import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentControllerTypeEnum } from "./deploymentcontrollertypeenum";
/**
 * The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export declare class DeploymentController extends SpeakeasyBase {
    type: DeploymentControllerTypeEnum;
}
