import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTransitGatewayRouteTableActionEnum {
    DeleteTransitGatewayRouteTable = "DeleteTransitGatewayRouteTable"
}
export declare enum PostDeleteTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayRouteTableActionEnum;
    version: PostDeleteTransitGatewayRouteTableVersionEnum;
}
export declare class PostDeleteTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayRouteTableQueryParams;
    headers: PostDeleteTransitGatewayRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
