import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayRouteData } from "./gatewayroutedata";


export class DeleteGatewayRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayRoute" })
  gatewayRoute: GatewayRouteData;
}
