import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { GatewayRouteSpec } from "./gatewayroutespec";
import { GatewayRouteStatus } from "./gatewayroutestatus";
/**
 * An object that represents a gateway route returned by a describe operation.
**/
export declare class GatewayRouteData extends SpeakeasyBase {
    gatewayRouteName: string;
    meshName: string;
    metadata: ResourceMetadata;
    spec: GatewayRouteSpec;
    status: GatewayRouteStatus;
    virtualGatewayName: string;
}
