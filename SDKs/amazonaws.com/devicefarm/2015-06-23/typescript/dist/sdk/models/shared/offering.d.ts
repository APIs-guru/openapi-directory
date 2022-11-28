import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { RecurringCharge } from "./recurringcharge";
import { OfferingTypeEnum } from "./offeringtypeenum";
/**
 * Represents the metadata of a device offering.
**/
export declare class Offering extends SpeakeasyBase {
    description?: string;
    id?: string;
    platform?: DevicePlatformEnum;
    recurringCharges?: RecurringCharge[];
    type?: OfferingTypeEnum;
}
