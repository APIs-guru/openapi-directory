import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnDemandCapacityReservationPreferenceEnum } from "./ondemandcapacityreservationpreferenceenum";
import { OnDemandCapacityReservationUsageStrategyEnum } from "./ondemandcapacityreservationusagestrategyenum";



// OnDemandCapacityReservationOptions
/** 
 * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
**/
export class OnDemandCapacityReservationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityReservationPreference" })
  capacityReservationPreference?: OnDemandCapacityReservationPreferenceEnum;

  @SpeakeasyMetadata({ data: "json, name=CapacityReservationResourceGroupArn" })
  capacityReservationResourceGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UsageStrategy" })
  usageStrategy?: OnDemandCapacityReservationUsageStrategyEnum;
}
