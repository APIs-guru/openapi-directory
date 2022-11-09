import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayRouteData } from "./gatewayroutedata";


export class DescribeGatewayRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayRoute" })
  gatewayRoute: GatewayRouteData;
}
