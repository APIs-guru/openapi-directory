import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTransitGatewayConnectActionEnum {
    DeleteTransitGatewayConnect = "DeleteTransitGatewayConnect"
}
export declare enum PostDeleteTransitGatewayConnectVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayConnectQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayConnectActionEnum;
    version: PostDeleteTransitGatewayConnectVersionEnum;
}
export declare class PostDeleteTransitGatewayConnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayConnectRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayConnectQueryParams;
    headers: PostDeleteTransitGatewayConnectHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayConnectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
