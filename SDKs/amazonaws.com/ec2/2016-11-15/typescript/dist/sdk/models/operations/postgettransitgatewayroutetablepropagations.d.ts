import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetTransitGatewayRouteTablePropagationsActionEnum {
    GetTransitGatewayRouteTablePropagations = "GetTransitGatewayRouteTablePropagations"
}
export declare enum PostGetTransitGatewayRouteTablePropagationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetTransitGatewayRouteTablePropagationsQueryParams extends SpeakeasyBase {
    action: PostGetTransitGatewayRouteTablePropagationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetTransitGatewayRouteTablePropagationsVersionEnum;
}
export declare class PostGetTransitGatewayRouteTablePropagationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetTransitGatewayRouteTablePropagationsRequest extends SpeakeasyBase {
    queryParams: PostGetTransitGatewayRouteTablePropagationsQueryParams;
    headers: PostGetTransitGatewayRouteTablePropagationsHeaders;
    request?: Uint8Array;
}
export declare class PostGetTransitGatewayRouteTablePropagationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
