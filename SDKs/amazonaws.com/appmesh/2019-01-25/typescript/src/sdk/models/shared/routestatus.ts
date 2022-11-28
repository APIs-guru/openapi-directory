import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteStatusCodeEnum } from "./routestatuscodeenum";



// RouteStatus
/** 
 * An object that represents the current status of a route.
**/
export class RouteStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RouteStatusCodeEnum;
}
