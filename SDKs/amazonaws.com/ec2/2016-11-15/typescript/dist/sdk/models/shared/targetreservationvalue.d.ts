import { SpeakeasyBase } from "../../../internal/utils";
import { ReservationValue } from "./reservationvalue";
import { TargetConfiguration } from "./targetconfiguration";
/**
 * The total value of the new Convertible Reserved Instances.
**/
export declare class TargetReservationValue extends SpeakeasyBase {
    reservationValue?: ReservationValue;
    targetConfiguration?: TargetConfiguration;
}
