import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GatewayRouteVirtualService
/** 
 * An object that represents the virtual service that traffic is routed to.
**/
export class GatewayRouteVirtualService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}
