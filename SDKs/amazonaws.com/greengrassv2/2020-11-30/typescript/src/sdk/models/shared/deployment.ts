import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";



// Deployment
/** 
 * Contains information about a deployment.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatus" })
  deploymentStatus?: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=isLatestForTarget" })
  isLatestForTarget?: boolean;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;
}
