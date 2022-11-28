import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Update action that has failed to be processed for the corresponding apply/stop request
**/
export declare class UnprocessedUpdateAction extends SpeakeasyBase {
    cacheClusterId?: string;
    errorMessage?: string;
    errorType?: string;
    replicationGroupId?: string;
    serviceUpdateName?: string;
}
