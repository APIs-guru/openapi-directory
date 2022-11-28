import { SpeakeasyBase } from "../../../internal/utils";
import { FleetReplacementStrategyEnum } from "./fleetreplacementstrategyenum";
/**
 * The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
**/
export declare class FleetSpotCapacityRebalance extends SpeakeasyBase {
    replacementStrategy?: FleetReplacementStrategyEnum;
}
