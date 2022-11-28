import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeFrequencyEnum } from "./recurringchargefrequencyenum";
/**
 * Describes a recurring charge.
**/
export declare class RecurringCharge extends SpeakeasyBase {
    amount?: number;
    frequency?: RecurringChargeFrequencyEnum;
}
