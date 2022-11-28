import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationPreferenceEnum } from "./capacityreservationpreferenceenum";
import { CapacityReservationTargetResponse } from "./capacityreservationtargetresponse";
/**
 * Information about the Capacity Reservation targeting option.
**/
export declare class LaunchTemplateCapacityReservationSpecificationResponse extends SpeakeasyBase {
    capacityReservationPreference?: CapacityReservationPreferenceEnum;
    capacityReservationTarget?: CapacityReservationTargetResponse;
}
