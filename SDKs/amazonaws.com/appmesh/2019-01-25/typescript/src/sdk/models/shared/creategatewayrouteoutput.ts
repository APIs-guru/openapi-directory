import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteData } from "./gatewayroutedata";



export class CreateGatewayRouteOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayRoute" })
  gatewayRoute: GatewayRouteData;
}
