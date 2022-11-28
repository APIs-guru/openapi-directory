import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteLocalGatewayRouteActionEnum {
    DeleteLocalGatewayRoute = "DeleteLocalGatewayRoute"
}
export declare enum PostDeleteLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteLocalGatewayRouteQueryParams extends SpeakeasyBase {
    action: PostDeleteLocalGatewayRouteActionEnum;
    version: PostDeleteLocalGatewayRouteVersionEnum;
}
export declare class PostDeleteLocalGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLocalGatewayRouteRequest extends SpeakeasyBase {
    queryParams: PostDeleteLocalGatewayRouteQueryParams;
    headers: PostDeleteLocalGatewayRouteHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
