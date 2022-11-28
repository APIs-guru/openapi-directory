import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteHostnameMatch } from "./gatewayroutehostnamematch";
import { GrpcGatewayRouteMetadata } from "./grpcgatewayroutemetadata";



// GrpcGatewayRouteMatch
/** 
 * An object that represents the criteria for determining a request match.
**/
export class GrpcGatewayRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameMatch;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GrpcGatewayRouteMetadata })
  metadata?: GrpcGatewayRouteMetadata[];

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
