import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WeightedTarget } from "./weightedtarget";


// TcpRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class TcpRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=weightedTargets", elemType: shared.WeightedTarget })
  weightedTargets: WeightedTarget[];
}
