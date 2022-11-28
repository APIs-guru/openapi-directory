import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesModificationResult } from "./reservedinstancesmodificationresult";
import { ReservedInstancesId } from "./reservedinstancesid";
/**
 * Describes a Reserved Instance modification.
**/
export declare class ReservedInstancesModification extends SpeakeasyBase {
    clientToken?: string;
    createDate?: Date;
    effectiveDate?: Date;
    modificationResults?: ReservedInstancesModificationResult[];
    reservedInstancesIds?: ReservedInstancesId[];
    reservedInstancesModificationId?: string;
    status?: string;
    statusMessage?: string;
    updateDate?: Date;
}
