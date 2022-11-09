import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WeightedTarget } from "./weightedtarget";


// HttpRouteAction
/** 
 * An object representing the traffic distribution requirements for matched HTTP
 *          requests.
**/
export class HttpRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=weightedTargets", elemType: shared.WeightedTarget })
  weightedTargets?: WeightedTarget[];
}
