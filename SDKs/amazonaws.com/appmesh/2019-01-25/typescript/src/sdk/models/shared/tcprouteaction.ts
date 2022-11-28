import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeightedTarget } from "./weightedtarget";



// TcpRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class TcpRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=weightedTargets", elemType: WeightedTarget })
  weightedTargets: WeightedTarget[];
}
