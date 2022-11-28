import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservationValue } from "./reservationvalue";



// ReservedInstanceReservationValue
/** 
 * The total value of the Convertible Reserved Instance.
**/
export class ReservedInstanceReservationValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservationValue?: ReservationValue;

  @SpeakeasyMetadata()
  reservedInstanceId?: string;
}
