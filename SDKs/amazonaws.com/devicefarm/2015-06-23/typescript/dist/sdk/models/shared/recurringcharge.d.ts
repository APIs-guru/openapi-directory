import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
import { RecurringChargeFrequencyEnum } from "./recurringchargefrequencyenum";
/**
 * Specifies whether charges for devices are recurring.
**/
export declare class RecurringCharge extends SpeakeasyBase {
    cost?: MonetaryAmount;
    frequency?: RecurringChargeFrequencyEnum;
}
