import { SpeakeasyBase } from "../../../internal/utils";
import { WeightedTarget } from "./weightedtarget";
/**
 * An object representing the traffic distribution requirements for matched HTTP
 *          requests.
**/
export declare class HttpRouteAction extends SpeakeasyBase {
    weightedTargets?: WeightedTarget[];
}
