import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableTransitGatewayRouteTablePropagationActionEnum {
    EnableTransitGatewayRouteTablePropagation = "EnableTransitGatewayRouteTablePropagation"
}
export declare enum PostEnableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableTransitGatewayRouteTablePropagationQueryParams extends SpeakeasyBase {
    action: PostEnableTransitGatewayRouteTablePropagationActionEnum;
    version: PostEnableTransitGatewayRouteTablePropagationVersionEnum;
}
export declare class PostEnableTransitGatewayRouteTablePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    queryParams: PostEnableTransitGatewayRouteTablePropagationQueryParams;
    headers: PostEnableTransitGatewayRouteTablePropagationHeaders;
    request?: Uint8Array;
}
export declare class PostEnableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
