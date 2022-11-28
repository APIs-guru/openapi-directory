import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
/**
 * Identifies an DMS resource and any pending actions for it.
**/
export declare class ResourcePendingMaintenanceActions extends SpeakeasyBase {
    pendingMaintenanceActionDetails?: PendingMaintenanceAction[];
    resourceIdentifier?: string;
}
