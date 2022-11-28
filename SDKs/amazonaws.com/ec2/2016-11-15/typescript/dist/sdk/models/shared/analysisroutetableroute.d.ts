import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a route table route.
**/
export declare class AnalysisRouteTableRoute extends SpeakeasyBase {
    destinationCidr?: string;
    destinationPrefixListId?: string;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    origin?: string;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
