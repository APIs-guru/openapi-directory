import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnDemandCapacityReservationPreferenceEnum } from "./ondemandcapacityreservationpreferenceenum";
import { OnDemandCapacityReservationUsageStrategyEnum } from "./ondemandcapacityreservationusagestrategyenum";


// OnDemandCapacityReservationOptions
/** 
 * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
**/
export class OnDemandCapacityReservationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CapacityReservationPreference" })
  capacityReservationPreference?: OnDemandCapacityReservationPreferenceEnum;

  @Metadata({ data: "json, name=CapacityReservationResourceGroupArn" })
  capacityReservationResourceGroupArn?: string;

  @Metadata({ data: "json, name=UsageStrategy" })
  usageStrategy?: OnDemandCapacityReservationUsageStrategyEnum;
}
