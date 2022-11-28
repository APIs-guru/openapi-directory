import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
/**
 * Describes the price for a Reserved Instance.
**/
export declare class PriceSchedule extends SpeakeasyBase {
    active?: boolean;
    currencyCode?: CurrencyCodeValuesEnum;
    price?: number;
    term?: number;
}
