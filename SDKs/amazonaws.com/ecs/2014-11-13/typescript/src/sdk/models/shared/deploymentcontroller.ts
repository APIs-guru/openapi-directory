import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentControllerTypeEnum } from "./deploymentcontrollertypeenum";


// DeploymentController
/** 
 * The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class DeploymentController extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: DeploymentControllerTypeEnum;
}
