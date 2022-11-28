import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenUpdateStatusEnum } from "./authtokenupdatestatusenum";
import { PendingLogDeliveryConfiguration } from "./pendinglogdeliveryconfiguration";
/**
 * A group of settings that are applied to the cluster in the future, or that are currently being applied.
**/
export declare class PendingModifiedValues extends SpeakeasyBase {
    authTokenStatus?: AuthTokenUpdateStatusEnum;
    cacheNodeIdsToRemove?: string[];
    cacheNodeType?: string;
    engineVersion?: string;
    logDeliveryConfigurations?: PendingLogDeliveryConfiguration[];
    numCacheNodes?: number;
}
