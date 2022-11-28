import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeightedTarget } from "./weightedtarget";



// HttpRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class HttpRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=weightedTargets", elemType: WeightedTarget })
  weightedTargets: WeightedTarget[];
}
