import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteLocalGatewayRouteActionEnum {
    DeleteLocalGatewayRoute = "DeleteLocalGatewayRoute"
}
export declare enum GetDeleteLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteLocalGatewayRouteQueryParams extends SpeakeasyBase {
    action: GetDeleteLocalGatewayRouteActionEnum;
    destinationCidrBlock: string;
    dryRun?: boolean;
    localGatewayRouteTableId: string;
    version: GetDeleteLocalGatewayRouteVersionEnum;
}
export declare class GetDeleteLocalGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLocalGatewayRouteRequest extends SpeakeasyBase {
    queryParams: GetDeleteLocalGatewayRouteQueryParams;
    headers: GetDeleteLocalGatewayRouteHeaders;
}
export declare class GetDeleteLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
