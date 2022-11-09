import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BulkDeploymentMetrics } from "./bulkdeploymentmetrics";
import { BulkDeploymentStatusEnum } from "./bulkdeploymentstatusenum";
import { ErrorDetail } from "./errordetail";


export class GetBulkDeploymentStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkDeploymentMetrics" })
  bulkDeploymentMetrics?: BulkDeploymentMetrics;

  @Metadata({ data: "json, name=BulkDeploymentStatus" })
  bulkDeploymentStatus?: BulkDeploymentStatusEnum;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=ErrorDetails", elemType: shared.ErrorDetail })
  errorDetails?: ErrorDetail[];

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
