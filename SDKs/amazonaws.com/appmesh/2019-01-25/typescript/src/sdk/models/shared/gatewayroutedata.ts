import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { GatewayRouteSpec } from "./gatewayroutespec";
import { GatewayRouteStatus } from "./gatewayroutestatus";


// GatewayRouteData
/** 
 * An object that represents a gateway route returned by a describe operation.
**/
export class GatewayRouteData extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayRouteName" })
  gatewayRouteName: string;

  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @Metadata({ data: "json, name=spec" })
  spec: GatewayRouteSpec;

  @Metadata({ data: "json, name=status" })
  status: GatewayRouteStatus;

  @Metadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}
