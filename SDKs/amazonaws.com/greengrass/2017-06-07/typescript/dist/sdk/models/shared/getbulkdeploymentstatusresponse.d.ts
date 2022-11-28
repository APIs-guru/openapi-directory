import { SpeakeasyBase } from "../../../internal/utils";
import { BulkDeploymentMetrics } from "./bulkdeploymentmetrics";
import { BulkDeploymentStatusEnum } from "./bulkdeploymentstatusenum";
import { ErrorDetail } from "./errordetail";
export declare class GetBulkDeploymentStatusResponse extends SpeakeasyBase {
    bulkDeploymentMetrics?: BulkDeploymentMetrics;
    bulkDeploymentStatus?: BulkDeploymentStatusEnum;
    createdAt?: string;
    errorDetails?: ErrorDetail[];
    errorMessage?: string;
    tags?: Map<string, string>;
}
