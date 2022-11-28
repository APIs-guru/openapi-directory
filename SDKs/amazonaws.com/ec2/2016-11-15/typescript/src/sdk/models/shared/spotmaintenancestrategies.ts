import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotCapacityRebalance } from "./spotcapacityrebalance";



// SpotMaintenanceStrategies
/** 
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
**/
export class SpotMaintenanceStrategies extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityRebalance?: SpotCapacityRebalance;
}
