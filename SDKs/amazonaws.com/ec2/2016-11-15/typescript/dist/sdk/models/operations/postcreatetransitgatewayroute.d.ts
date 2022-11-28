import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTransitGatewayRouteActionEnum {
    CreateTransitGatewayRoute = "CreateTransitGatewayRoute"
}
export declare enum PostCreateTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayRouteQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayRouteActionEnum;
    version: PostCreateTransitGatewayRouteVersionEnum;
}
export declare class PostCreateTransitGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayRouteRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayRouteQueryParams;
    headers: PostCreateTransitGatewayRouteHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
