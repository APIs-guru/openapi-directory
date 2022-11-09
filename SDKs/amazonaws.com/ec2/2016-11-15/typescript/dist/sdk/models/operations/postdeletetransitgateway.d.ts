import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTransitGatewayActionEnum {
    DeleteTransitGateway = "DeleteTransitGateway"
}
export declare enum PostDeleteTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayActionEnum;
    version: PostDeleteTransitGatewayVersionEnum;
}
export declare class PostDeleteTransitGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayQueryParams;
    headers: PostDeleteTransitGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
