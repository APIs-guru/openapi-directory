import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteRef } from "./gatewayrouteref";



export class ListGatewayRoutesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayRoutes", elemType: GatewayRouteRef })
  gatewayRoutes: GatewayRouteRef[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
