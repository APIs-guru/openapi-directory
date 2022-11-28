import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkDeploymentMetrics } from "./bulkdeploymentmetrics";
import { BulkDeploymentStatusEnum } from "./bulkdeploymentstatusenum";
import { ErrorDetail } from "./errordetail";



export class GetBulkDeploymentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkDeploymentMetrics" })
  bulkDeploymentMetrics?: BulkDeploymentMetrics;

  @SpeakeasyMetadata({ data: "json, name=BulkDeploymentStatus" })
  bulkDeploymentStatus?: BulkDeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorDetails", elemType: ErrorDetail })
  errorDetails?: ErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
