import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTransitGatewayRouteActionEnum {
    DeleteTransitGatewayRoute = "DeleteTransitGatewayRoute"
}
export declare enum PostDeleteTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayRouteQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayRouteActionEnum;
    version: PostDeleteTransitGatewayRouteVersionEnum;
}
export declare class PostDeleteTransitGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayRouteRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayRouteQueryParams;
    headers: PostDeleteTransitGatewayRouteHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
