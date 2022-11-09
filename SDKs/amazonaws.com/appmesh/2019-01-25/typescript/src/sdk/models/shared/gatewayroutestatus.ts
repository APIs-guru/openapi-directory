import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayRouteStatusCodeEnum } from "./gatewayroutestatuscodeenum";


// GatewayRouteStatus
/** 
 * An object that represents the current status of a gateway route.
**/
export class GatewayRouteStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: GatewayRouteStatusCodeEnum;
}
