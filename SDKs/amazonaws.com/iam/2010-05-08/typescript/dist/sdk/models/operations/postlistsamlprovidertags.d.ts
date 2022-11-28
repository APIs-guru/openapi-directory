import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListSamlProviderTagsActionEnum {
    ListSamlProviderTags = "ListSAMLProviderTags"
}
export declare enum PostListSamlProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListSamlProviderTagsQueryParams extends SpeakeasyBase {
    action: PostListSamlProviderTagsActionEnum;
    version: PostListSamlProviderTagsVersionEnum;
}
export declare class PostListSamlProviderTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListSamlProviderTagsRequest extends SpeakeasyBase {
    queryParams: PostListSamlProviderTagsQueryParams;
    headers: PostListSamlProviderTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListSamlProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
