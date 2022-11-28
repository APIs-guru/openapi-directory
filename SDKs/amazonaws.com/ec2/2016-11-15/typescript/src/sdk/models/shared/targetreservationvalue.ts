import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservationValue } from "./reservationvalue";
import { TargetConfiguration } from "./targetconfiguration";



// TargetReservationValue
/** 
 * The total value of the new Convertible Reserved Instances.
**/
export class TargetReservationValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservationValue?: ReservationValue;

  @SpeakeasyMetadata()
  targetConfiguration?: TargetConfiguration;
}
