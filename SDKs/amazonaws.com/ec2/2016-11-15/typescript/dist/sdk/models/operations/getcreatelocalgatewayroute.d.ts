import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateLocalGatewayRouteActionEnum {
    CreateLocalGatewayRoute = "CreateLocalGatewayRoute"
}
export declare enum GetCreateLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateLocalGatewayRouteQueryParams extends SpeakeasyBase {
    action: GetCreateLocalGatewayRouteActionEnum;
    destinationCidrBlock: string;
    dryRun?: boolean;
    localGatewayRouteTableId: string;
    localGatewayVirtualInterfaceGroupId: string;
    version: GetCreateLocalGatewayRouteVersionEnum;
}
export declare class GetCreateLocalGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateLocalGatewayRouteRequest extends SpeakeasyBase {
    queryParams: GetCreateLocalGatewayRouteQueryParams;
    headers: GetCreateLocalGatewayRouteHeaders;
}
export declare class GetCreateLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
