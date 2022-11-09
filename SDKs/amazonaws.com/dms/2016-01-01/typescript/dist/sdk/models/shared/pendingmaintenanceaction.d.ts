import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.
**/
export declare class PendingMaintenanceAction extends SpeakeasyBase {
    action?: string;
    autoAppliedAfterDate?: Date;
    currentApplyDate?: Date;
    description?: string;
    forcedApplyDate?: Date;
    optInStatus?: string;
}
