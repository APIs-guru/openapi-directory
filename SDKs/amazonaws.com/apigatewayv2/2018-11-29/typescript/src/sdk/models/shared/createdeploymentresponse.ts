import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoDeployed" })
  autoDeployed?: boolean;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: DeploymentStatusEnum;

  @Metadata({ data: "json, name=DeploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}
