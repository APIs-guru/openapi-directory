import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request for a purchase offering.
**/
export declare class PurchaseOfferingRequest extends SpeakeasyBase {
    offeringId: string;
    offeringPromotionId?: string;
    quantity: number;
}
