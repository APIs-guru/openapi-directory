import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BulkDeploymentResult } from "./bulkdeploymentresult";
export declare class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
    deployments?: BulkDeploymentResult[];
    nextToken?: string;
}
