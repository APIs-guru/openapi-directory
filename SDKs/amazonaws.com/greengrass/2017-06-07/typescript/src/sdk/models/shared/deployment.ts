import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";



// Deployment
/** 
 * Information about a deployment.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: DeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=GroupArn" })
  groupArn?: string;
}
