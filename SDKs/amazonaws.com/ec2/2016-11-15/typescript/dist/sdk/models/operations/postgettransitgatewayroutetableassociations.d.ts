import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetTransitGatewayRouteTableAssociationsActionEnum {
    GetTransitGatewayRouteTableAssociations = "GetTransitGatewayRouteTableAssociations"
}
export declare enum PostGetTransitGatewayRouteTableAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetTransitGatewayRouteTableAssociationsQueryParams extends SpeakeasyBase {
    action: PostGetTransitGatewayRouteTableAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetTransitGatewayRouteTableAssociationsVersionEnum;
}
export declare class PostGetTransitGatewayRouteTableAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetTransitGatewayRouteTableAssociationsRequest extends SpeakeasyBase {
    queryParams: PostGetTransitGatewayRouteTableAssociationsQueryParams;
    headers: PostGetTransitGatewayRouteTableAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostGetTransitGatewayRouteTableAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
