import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GatewayRouteRef } from "./gatewayrouteref";


export class ListGatewayRoutesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayRoutes", elemType: shared.GatewayRouteRef })
  gatewayRoutes: GatewayRouteRef[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
