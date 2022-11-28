import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
/**
 * Contains the details for the read/write capacity mode.
**/
export declare class BillingModeSummary extends SpeakeasyBase {
    billingMode?: BillingModeEnum;
    lastUpdateToPayPerRequestDateTime?: Date;
}
