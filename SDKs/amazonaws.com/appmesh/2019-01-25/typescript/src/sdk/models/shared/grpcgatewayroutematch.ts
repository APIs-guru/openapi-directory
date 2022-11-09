import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GatewayRouteHostnameMatch } from "./gatewayroutehostnamematch";
import { GrpcGatewayRouteMetadata } from "./grpcgatewayroutemetadata";


// GrpcGatewayRouteMatch
/** 
 * An object that represents the criteria for determining a request match.
**/
export class GrpcGatewayRouteMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameMatch;

  @Metadata({ data: "json, name=metadata", elemType: shared.GrpcGatewayRouteMetadata })
  metadata?: GrpcGatewayRouteMetadata[];

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
