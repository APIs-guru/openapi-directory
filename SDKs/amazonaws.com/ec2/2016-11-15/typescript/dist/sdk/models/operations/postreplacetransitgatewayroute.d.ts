import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostReplaceTransitGatewayRouteActionEnum {
    ReplaceTransitGatewayRoute = "ReplaceTransitGatewayRoute"
}
export declare enum PostReplaceTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReplaceTransitGatewayRouteQueryParams extends SpeakeasyBase {
    action: PostReplaceTransitGatewayRouteActionEnum;
    version: PostReplaceTransitGatewayRouteVersionEnum;
}
export declare class PostReplaceTransitGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReplaceTransitGatewayRouteRequest extends SpeakeasyBase {
    queryParams: PostReplaceTransitGatewayRouteQueryParams;
    headers: PostReplaceTransitGatewayRouteHeaders;
    request?: Uint8Array;
}
export declare class PostReplaceTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
