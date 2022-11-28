import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { GatewayRouteSpec } from "./gatewayroutespec";
import { GatewayRouteStatus } from "./gatewayroutestatus";



// GatewayRouteData
/** 
 * An object that represents a gateway route returned by a describe operation.
**/
export class GatewayRouteData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayRouteName" })
  gatewayRouteName: string;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: GatewayRouteSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GatewayRouteStatus;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}
