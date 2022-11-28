import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSearchTransitGatewayRoutesActionEnum {
    SearchTransitGatewayRoutes = "SearchTransitGatewayRoutes"
}
export declare enum PostSearchTransitGatewayRoutesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostSearchTransitGatewayRoutesQueryParams extends SpeakeasyBase {
    action: PostSearchTransitGatewayRoutesActionEnum;
    version: PostSearchTransitGatewayRoutesVersionEnum;
}
export declare class PostSearchTransitGatewayRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSearchTransitGatewayRoutesRequest extends SpeakeasyBase {
    queryParams: PostSearchTransitGatewayRoutesQueryParams;
    headers: PostSearchTransitGatewayRoutesHeaders;
    request?: Uint8Array;
}
export declare class PostSearchTransitGatewayRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
