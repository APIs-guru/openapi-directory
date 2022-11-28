import { SpeakeasyBase } from "../../../internal/utils";
import { WeightedTarget } from "./weightedtarget";
/**
 * An object that represents the action to take if a match is determined.
**/
export declare class TcpRouteAction extends SpeakeasyBase {
    weightedTargets: WeightedTarget[];
}
