import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateRouteActionEnum {
    CreateRoute = "CreateRoute"
}
export declare enum GetCreateRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateRouteQueryParams extends SpeakeasyBase {
    action: GetCreateRouteActionEnum;
    carrierGatewayId?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    localGatewayId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    routeTableId: string;
    transitGatewayId?: string;
    version: GetCreateRouteVersionEnum;
    vpcEndpointId?: string;
    vpcPeeringConnectionId?: string;
}
export declare class GetCreateRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateRouteRequest extends SpeakeasyBase {
    queryParams: GetCreateRouteQueryParams;
    headers: GetCreateRouteHeaders;
}
export declare class GetCreateRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
