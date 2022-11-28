import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetReplacementStrategyEnum } from "./fleetreplacementstrategyenum";



// FleetSpotCapacityRebalance
/** 
 * The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
**/
export class FleetSpotCapacityRebalance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replacementStrategy?: FleetReplacementStrategyEnum;
}
