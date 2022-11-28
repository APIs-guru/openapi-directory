import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUntagOpenIdConnectProviderActionEnum {
    UntagOpenIdConnectProvider = "UntagOpenIDConnectProvider"
}
export declare enum PostUntagOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: PostUntagOpenIdConnectProviderActionEnum;
    version: PostUntagOpenIdConnectProviderVersionEnum;
}
export declare class PostUntagOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: PostUntagOpenIdConnectProviderQueryParams;
    headers: PostUntagOpenIdConnectProviderHeaders;
    request?: Uint8Array;
}
export declare class PostUntagOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
