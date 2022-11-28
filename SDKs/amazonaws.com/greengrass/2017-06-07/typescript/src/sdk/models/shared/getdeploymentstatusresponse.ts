import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { ErrorDetail } from "./errordetail";



export class GetDeploymentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: DeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorDetails", elemType: ErrorDetail })
  errorDetails?: ErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: string;
}
