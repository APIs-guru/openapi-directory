import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingModeEnum } from "./billingmodeenum";


// BillingModeSummary
/** 
 * Contains the details for the read/write capacity mode.
**/
export class BillingModeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @Metadata({ data: "json, name=LastUpdateToPayPerRequestDateTime" })
  lastUpdateToPayPerRequestDateTime?: Date;
}
