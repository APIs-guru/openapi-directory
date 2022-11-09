import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonetaryAmount } from "./monetaryamount";
import { RecurringChargeFrequencyEnum } from "./recurringchargefrequencyenum";


// RecurringCharge
/** 
 * Specifies whether charges for devices are recurring.
**/
export class RecurringCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: MonetaryAmount;

  @Metadata({ data: "json, name=frequency" })
  frequency?: RecurringChargeFrequencyEnum;
}
