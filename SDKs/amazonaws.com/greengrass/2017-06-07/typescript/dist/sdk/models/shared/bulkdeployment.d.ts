import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
**/
export declare class BulkDeployment extends SpeakeasyBase {
    bulkDeploymentArn?: string;
    bulkDeploymentId?: string;
    createdAt?: string;
}
