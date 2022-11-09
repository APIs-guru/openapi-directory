import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// LastDeploymentInfo
/** 
 * Information about the most recent attempted or successful deployment to a deployment group.
**/
export class LastDeploymentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: DeploymentStatusEnum;
}
