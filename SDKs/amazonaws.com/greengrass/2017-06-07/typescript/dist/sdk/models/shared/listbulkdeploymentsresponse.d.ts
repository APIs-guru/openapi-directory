import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BulkDeployment } from "./bulkdeployment";
export declare class ListBulkDeploymentsResponse extends SpeakeasyBase {
    bulkDeployments?: BulkDeployment[];
    nextToken?: string;
}
