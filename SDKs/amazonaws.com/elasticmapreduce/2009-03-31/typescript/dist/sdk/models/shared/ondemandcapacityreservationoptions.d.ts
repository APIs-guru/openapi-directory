import { SpeakeasyBase } from "../../../internal/utils";
import { OnDemandCapacityReservationPreferenceEnum } from "./ondemandcapacityreservationpreferenceenum";
import { OnDemandCapacityReservationUsageStrategyEnum } from "./ondemandcapacityreservationusagestrategyenum";
/**
 * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
**/
export declare class OnDemandCapacityReservationOptions extends SpeakeasyBase {
    capacityReservationPreference?: OnDemandCapacityReservationPreferenceEnum;
    capacityReservationResourceGroupArn?: string;
    usageStrategy?: OnDemandCapacityReservationUsageStrategyEnum;
}
