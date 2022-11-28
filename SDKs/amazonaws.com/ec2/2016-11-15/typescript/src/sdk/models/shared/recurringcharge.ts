import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeFrequencyEnum } from "./recurringchargefrequencyenum";



// RecurringCharge
/** 
 * Describes a recurring charge.
**/
export class RecurringCharge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amount?: number;

  @SpeakeasyMetadata()
  frequency?: RecurringChargeFrequencyEnum;
}
