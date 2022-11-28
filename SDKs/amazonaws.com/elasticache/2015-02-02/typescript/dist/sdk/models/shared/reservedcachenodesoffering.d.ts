import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
/**
 * Describes all of the attributes of a reserved cache node offering.
**/
export declare class ReservedCacheNodesOffering extends SpeakeasyBase {
    cacheNodeType?: string;
    duration?: number;
    fixedPrice?: number;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringCharge[];
    reservedCacheNodesOfferingId?: string;
    usagePrice?: number;
}
