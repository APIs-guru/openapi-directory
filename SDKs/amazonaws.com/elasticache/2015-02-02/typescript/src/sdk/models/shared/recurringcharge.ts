import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecurringCharge
/** 
 * Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
**/
export class RecurringCharge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
