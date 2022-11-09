import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { ErrorDetail } from "./errordetail";


// BulkDeploymentResult
/** 
 * Information about an individual group deployment in a bulk deployment operation.
**/
export class BulkDeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: DeploymentTypeEnum;

  @Metadata({ data: "json, name=ErrorDetails", elemType: shared.ErrorDetail })
  errorDetails?: ErrorDetail[];

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=GroupArn" })
  groupArn?: string;
}
