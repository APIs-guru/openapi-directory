import { SpeakeasyBase } from "../../../internal/utils";
import { BulkDeploymentResult } from "./bulkdeploymentresult";
export declare class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
    deployments?: BulkDeploymentResult[];
    nextToken?: string;
}
