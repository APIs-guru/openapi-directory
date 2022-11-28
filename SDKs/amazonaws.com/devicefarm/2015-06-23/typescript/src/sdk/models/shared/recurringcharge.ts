import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
import { RecurringChargeFrequencyEnum } from "./recurringchargefrequencyenum";



// RecurringCharge
/** 
 * Specifies whether charges for devices are recurring.
**/
export class RecurringCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: RecurringChargeFrequencyEnum;
}
