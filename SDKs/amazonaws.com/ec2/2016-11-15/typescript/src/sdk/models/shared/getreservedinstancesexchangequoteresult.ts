import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservationValue } from "./reservationvalue";
import { ReservedInstanceReservationValue } from "./reservedinstancereservationvalue";
import { TargetReservationValue } from "./targetreservationvalue";



// GetReservedInstancesExchangeQuoteResult
/** 
 * Contains the output of GetReservedInstancesExchangeQuote.
**/
export class GetReservedInstancesExchangeQuoteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  isValidExchange?: boolean;

  @SpeakeasyMetadata()
  outputReservedInstancesWillExpireAt?: Date;

  @SpeakeasyMetadata()
  paymentDue?: string;

  @SpeakeasyMetadata()
  reservedInstanceValueRollup?: ReservationValue;

  @SpeakeasyMetadata({ elemType: ReservedInstanceReservationValue })
  reservedInstanceValueSet?: ReservedInstanceReservationValue[];

  @SpeakeasyMetadata()
  targetConfigurationValueRollup?: ReservationValue;

  @SpeakeasyMetadata({ elemType: TargetReservationValue })
  targetConfigurationValueSet?: TargetReservationValue[];

  @SpeakeasyMetadata()
  validationFailureReason?: string;
}
