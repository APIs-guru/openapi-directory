import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { ErrorDetail } from "./errordetail";



// BulkDeploymentResult
/** 
 * Information about an individual group deployment in a bulk deployment operation.
**/
export class BulkDeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: DeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorDetails", elemType: ErrorDetail })
  errorDetails?: ErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupArn" })
  groupArn?: string;
}
