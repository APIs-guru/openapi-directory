import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GatewayRouteVirtualService
/** 
 * An object that represents the virtual service that traffic is routed to.
**/
export class GatewayRouteVirtualService extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}
