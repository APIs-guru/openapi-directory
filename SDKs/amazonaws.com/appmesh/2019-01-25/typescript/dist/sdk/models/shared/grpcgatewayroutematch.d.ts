import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteHostnameMatch } from "./gatewayroutehostnamematch";
import { GrpcGatewayRouteMetadata } from "./grpcgatewayroutemetadata";
/**
 * An object that represents the criteria for determining a request match.
**/
export declare class GrpcGatewayRouteMatch extends SpeakeasyBase {
    hostname?: GatewayRouteHostnameMatch;
    metadata?: GrpcGatewayRouteMetadata[];
    serviceName?: string;
}
