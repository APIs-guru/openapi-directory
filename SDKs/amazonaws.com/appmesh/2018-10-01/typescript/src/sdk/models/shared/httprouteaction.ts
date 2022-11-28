import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeightedTarget } from "./weightedtarget";



// HttpRouteAction
/** 
 * An object representing the traffic distribution requirements for matched HTTP
 *          requests.
**/
export class HttpRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=weightedTargets", elemType: WeightedTarget })
  weightedTargets?: WeightedTarget[];
}
