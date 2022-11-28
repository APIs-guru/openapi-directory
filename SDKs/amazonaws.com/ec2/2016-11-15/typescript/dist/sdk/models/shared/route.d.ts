import { SpeakeasyBase } from "../../../internal/utils";
import { RouteOriginEnum } from "./routeoriginenum";
import { RouteStateEnum } from "./routestateenum";
/**
 * Describes a route in a route table.
**/
export declare class Route extends SpeakeasyBase {
    carrierGatewayId?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    instanceOwnerId?: string;
    localGatewayId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    origin?: RouteOriginEnum;
    state?: RouteStateEnum;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
