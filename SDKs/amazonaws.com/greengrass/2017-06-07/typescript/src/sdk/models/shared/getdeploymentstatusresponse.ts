import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { ErrorDetail } from "./errordetail";


export class GetDeploymentStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: DeploymentTypeEnum;

  @Metadata({ data: "json, name=ErrorDetails", elemType: shared.ErrorDetail })
  errorDetails?: ErrorDetail[];

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: string;
}
