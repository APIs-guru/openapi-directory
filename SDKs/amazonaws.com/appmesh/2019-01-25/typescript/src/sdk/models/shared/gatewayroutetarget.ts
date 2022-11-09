import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayRouteVirtualService } from "./gatewayroutevirtualservice";


// GatewayRouteTarget
/** 
 * An object that represents a gateway route target.
**/
export class GatewayRouteTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualService" })
  virtualService: GatewayRouteVirtualService;
}
