import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteOpenIdConnectProviderActionEnum {
    DeleteOpenIdConnectProvider = "DeleteOpenIDConnectProvider"
}
export declare enum PostDeleteOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: PostDeleteOpenIdConnectProviderActionEnum;
    version: PostDeleteOpenIdConnectProviderVersionEnum;
}
export declare class PostDeleteOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: PostDeleteOpenIdConnectProviderQueryParams;
    headers: PostDeleteOpenIdConnectProviderHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
