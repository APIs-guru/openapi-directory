import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteStatusCodeEnum } from "./gatewayroutestatuscodeenum";



// GatewayRouteStatus
/** 
 * An object that represents the current status of a gateway route.
**/
export class GatewayRouteStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GatewayRouteStatusCodeEnum;
}
