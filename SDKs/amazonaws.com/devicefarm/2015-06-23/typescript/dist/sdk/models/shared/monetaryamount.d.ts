import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
/**
 * A number that represents the monetary amount for an offering or transaction.
**/
export declare class MonetaryAmount extends SpeakeasyBase {
    amount?: number;
    currencyCode?: CurrencyCodeEnum;
}
