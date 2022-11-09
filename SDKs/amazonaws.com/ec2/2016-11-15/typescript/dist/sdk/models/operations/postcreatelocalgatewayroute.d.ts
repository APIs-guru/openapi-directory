import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLocalGatewayRouteActionEnum {
    CreateLocalGatewayRoute = "CreateLocalGatewayRoute"
}
export declare enum PostCreateLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateLocalGatewayRouteQueryParams extends SpeakeasyBase {
    action: PostCreateLocalGatewayRouteActionEnum;
    version: PostCreateLocalGatewayRouteVersionEnum;
}
export declare class PostCreateLocalGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLocalGatewayRouteRequest extends SpeakeasyBase {
    queryParams: PostCreateLocalGatewayRouteQueryParams;
    headers: PostCreateLocalGatewayRouteHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
