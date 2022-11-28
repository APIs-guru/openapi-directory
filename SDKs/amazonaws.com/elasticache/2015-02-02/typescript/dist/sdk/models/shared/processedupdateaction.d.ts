import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";
/**
 * Update action that has been processed for the corresponding apply/stop request
**/
export declare class ProcessedUpdateAction extends SpeakeasyBase {
    cacheClusterId?: string;
    replicationGroupId?: string;
    serviceUpdateName?: string;
    updateActionStatus?: UpdateActionStatusEnum;
}
