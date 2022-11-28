import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
/**
 * Describes the result of the purchase.
**/
export declare class Purchase extends SpeakeasyBase {
    currencyCode?: CurrencyCodeValuesEnum;
    duration?: number;
    hostIdSet?: string[];
    hostReservationId?: string;
    hourlyPrice?: string;
    instanceFamily?: string;
    paymentOption?: PaymentOptionEnum;
    upfrontPrice?: string;
}
