import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RouteStatusCodeEnum } from "./routestatuscodeenum";


// RouteStatus
/** 
 * An object that represents the current status of a route.
**/
export class RouteStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: RouteStatusCodeEnum;
}
