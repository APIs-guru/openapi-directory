import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListOpenIdConnectProviderTagsActionEnum {
    ListOpenIdConnectProviderTags = "ListOpenIDConnectProviderTags"
}
export declare enum PostListOpenIdConnectProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListOpenIdConnectProviderTagsQueryParams extends SpeakeasyBase {
    action: PostListOpenIdConnectProviderTagsActionEnum;
    version: PostListOpenIdConnectProviderTagsVersionEnum;
}
export declare class PostListOpenIdConnectProviderTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListOpenIdConnectProviderTagsRequest extends SpeakeasyBase {
    queryParams: PostListOpenIdConnectProviderTagsQueryParams;
    headers: PostListOpenIdConnectProviderTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListOpenIdConnectProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
