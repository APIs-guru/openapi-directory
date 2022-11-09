import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// Deployment
/** 
 * Contains information about a deployment.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @Metadata({ data: "json, name=deploymentStatus" })
  deploymentStatus?: DeploymentStatusEnum;

  @Metadata({ data: "json, name=isLatestForTarget" })
  isLatestForTarget?: boolean;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;
}
