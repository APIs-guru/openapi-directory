import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateTransitGatewayConnectActionEnum {
    CreateTransitGatewayConnect = "CreateTransitGatewayConnect"
}
export declare enum PostCreateTransitGatewayConnectVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayConnectQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayConnectActionEnum;
    version: PostCreateTransitGatewayConnectVersionEnum;
}
export declare class PostCreateTransitGatewayConnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayConnectRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayConnectQueryParams;
    headers: PostCreateTransitGatewayConnectHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayConnectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
