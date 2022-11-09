import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";


// Deployment
/** 
 * Information about a deployment.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: DeploymentTypeEnum;

  @Metadata({ data: "json, name=GroupArn" })
  groupArn?: string;
}
