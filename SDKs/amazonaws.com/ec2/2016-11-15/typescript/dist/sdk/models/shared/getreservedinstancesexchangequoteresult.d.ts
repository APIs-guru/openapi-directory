import { SpeakeasyBase } from "../../../internal/utils";
import { ReservationValue } from "./reservationvalue";
import { ReservedInstanceReservationValue } from "./reservedinstancereservationvalue";
import { TargetReservationValue } from "./targetreservationvalue";
/**
 * Contains the output of GetReservedInstancesExchangeQuote.
**/
export declare class GetReservedInstancesExchangeQuoteResult extends SpeakeasyBase {
    currencyCode?: string;
    isValidExchange?: boolean;
    outputReservedInstancesWillExpireAt?: Date;
    paymentDue?: string;
    reservedInstanceValueRollup?: ReservationValue;
    reservedInstanceValueSet?: ReservedInstanceReservationValue[];
    targetConfigurationValueRollup?: ReservationValue;
    targetConfigurationValueSet?: TargetReservationValue[];
    validationFailureReason?: string;
}
