import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachInternetGatewayActionEnum {
    AttachInternetGateway = "AttachInternetGateway"
}
export declare enum PostAttachInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAttachInternetGatewayQueryParams extends SpeakeasyBase {
    action: PostAttachInternetGatewayActionEnum;
    version: PostAttachInternetGatewayVersionEnum;
}
export declare class PostAttachInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachInternetGatewayRequest extends SpeakeasyBase {
    queryParams: PostAttachInternetGatewayQueryParams;
    headers: PostAttachInternetGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostAttachInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
