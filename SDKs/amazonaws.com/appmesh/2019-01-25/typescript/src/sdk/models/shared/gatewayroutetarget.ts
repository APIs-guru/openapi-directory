import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteVirtualService } from "./gatewayroutevirtualservice";



// GatewayRouteTarget
/** 
 * An object that represents a gateway route target.
**/
export class GatewayRouteTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualService" })
  virtualService: GatewayRouteVirtualService;
}
