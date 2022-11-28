import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { Purchase } from "./purchase";
export declare class PurchaseHostReservationResult extends SpeakeasyBase {
    clientToken?: string;
    currencyCode?: CurrencyCodeValuesEnum;
    purchase?: Purchase[];
    totalHourlyPrice?: string;
    totalUpfrontPrice?: string;
}
