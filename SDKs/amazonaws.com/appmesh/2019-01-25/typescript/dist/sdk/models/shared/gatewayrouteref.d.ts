import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a gateway route returned by a list operation.
**/
export declare class GatewayRouteRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    gatewayRouteName: string;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    version: number;
    virtualGatewayName: string;
}
