import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WeightedTarget } from "./weightedtarget";


// GrpcRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class GrpcRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=weightedTargets", elemType: shared.WeightedTarget })
  weightedTargets: WeightedTarget[];
}
