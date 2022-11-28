import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";



// BillingModeSummary
/** 
 * Contains the details for the read/write capacity mode.
**/
export class BillingModeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateToPayPerRequestDateTime" })
  lastUpdateToPayPerRequestDateTime?: Date;
}
