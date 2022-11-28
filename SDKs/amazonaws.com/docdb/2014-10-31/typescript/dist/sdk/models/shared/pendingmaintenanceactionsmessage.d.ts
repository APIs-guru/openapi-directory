import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";
/**
 * Represents the output of <a>DescribePendingMaintenanceActions</a>.
**/
export declare class PendingMaintenanceActionsMessage extends SpeakeasyBase {
    marker?: string;
    pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
