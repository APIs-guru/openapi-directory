import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { ReservationStateEnum } from "./reservationstateenum";
import { Tag } from "./tag";
/**
 * Details about the Dedicated Host Reservation and associated Dedicated Hosts.
**/
export declare class HostReservation extends SpeakeasyBase {
    count?: number;
    currencyCode?: CurrencyCodeValuesEnum;
    duration?: number;
    end?: Date;
    hostIdSet?: string[];
    hostReservationId?: string;
    hourlyPrice?: string;
    instanceFamily?: string;
    offeringId?: string;
    paymentOption?: PaymentOptionEnum;
    start?: Date;
    state?: ReservationStateEnum;
    tags?: Tag[];
    upfrontPrice?: string;
}
