import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateOpenIdConnectProviderActionEnum {
    CreateOpenIdConnectProvider = "CreateOpenIDConnectProvider"
}
export declare enum PostCreateOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: PostCreateOpenIdConnectProviderActionEnum;
    version: PostCreateOpenIdConnectProviderVersionEnum;
}
export declare class PostCreateOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: PostCreateOpenIdConnectProviderQueryParams;
    headers: PostCreateOpenIdConnectProviderHeaders;
    request?: Uint8Array;
}
export declare class PostCreateOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
