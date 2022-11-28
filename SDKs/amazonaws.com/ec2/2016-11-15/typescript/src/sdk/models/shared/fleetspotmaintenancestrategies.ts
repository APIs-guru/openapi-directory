import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetSpotCapacityRebalance } from "./fleetspotcapacityrebalance";



// FleetSpotMaintenanceStrategies
/** 
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
**/
export class FleetSpotMaintenanceStrategies extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityRebalance?: FleetSpotCapacityRebalance;
}
