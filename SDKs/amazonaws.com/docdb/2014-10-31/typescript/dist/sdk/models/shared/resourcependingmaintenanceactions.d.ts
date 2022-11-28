import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
/**
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>.
**/
export declare class ResourcePendingMaintenanceActions extends SpeakeasyBase {
    pendingMaintenanceActionDetails?: PendingMaintenanceAction[];
    resourceIdentifier?: string;
}
