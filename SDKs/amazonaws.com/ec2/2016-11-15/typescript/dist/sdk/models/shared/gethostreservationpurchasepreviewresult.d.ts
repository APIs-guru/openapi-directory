import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { Purchase } from "./purchase";
export declare class GetHostReservationPurchasePreviewResult extends SpeakeasyBase {
    currencyCode?: CurrencyCodeValuesEnum;
    purchase?: Purchase[];
    totalHourlyPrice?: string;
    totalUpfrontPrice?: string;
}
