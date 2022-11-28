import { SpeakeasyBase } from "../../../internal/utils";
import { BulkDeployment } from "./bulkdeployment";
export declare class ListBulkDeploymentsResponse extends SpeakeasyBase {
    bulkDeployments?: BulkDeployment[];
    nextToken?: string;
}
