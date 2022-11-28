import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}
export declare enum GetReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReplaceRouteQueryParams extends SpeakeasyBase {
    action: GetReplaceRouteActionEnum;
    carrierGatewayId?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    localGatewayId?: string;
    localTarget?: boolean;
    natGatewayId?: string;
    networkInterfaceId?: string;
    routeTableId: string;
    transitGatewayId?: string;
    version: GetReplaceRouteVersionEnum;
    vpcEndpointId?: string;
    vpcPeeringConnectionId?: string;
}
export declare class GetReplaceRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplaceRouteRequest extends SpeakeasyBase {
    queryParams: GetReplaceRouteQueryParams;
    headers: GetReplaceRouteHeaders;
}
export declare class GetReplaceRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
