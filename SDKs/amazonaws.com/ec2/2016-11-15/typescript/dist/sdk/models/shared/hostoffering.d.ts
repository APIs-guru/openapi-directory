import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
/**
 * Details about the Dedicated Host Reservation offering.
**/
export declare class HostOffering extends SpeakeasyBase {
    currencyCode?: CurrencyCodeValuesEnum;
    duration?: number;
    hourlyPrice?: string;
    instanceFamily?: string;
    offeringId?: string;
    paymentOption?: PaymentOptionEnum;
    upfrontPrice?: string;
}
