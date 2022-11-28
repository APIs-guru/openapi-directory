import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTransitGatewayRouteTableActionEnum {
    CreateTransitGatewayRouteTable = "CreateTransitGatewayRouteTable"
}
export declare enum PostCreateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayRouteTableActionEnum;
    version: PostCreateTransitGatewayRouteTableVersionEnum;
}
export declare class PostCreateTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayRouteTableQueryParams;
    headers: PostCreateTransitGatewayRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
