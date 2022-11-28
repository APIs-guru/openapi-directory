import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";



export class UpdateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoDeployed" })
  autoDeployed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DeploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}
