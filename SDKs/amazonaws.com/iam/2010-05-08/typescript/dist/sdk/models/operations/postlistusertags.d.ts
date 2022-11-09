import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListUserTagsActionEnum {
    ListUserTags = "ListUserTags"
}
export declare enum PostListUserTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListUserTagsQueryParams extends SpeakeasyBase {
    action: PostListUserTagsActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListUserTagsVersionEnum;
}
export declare class PostListUserTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListUserTagsRequest extends SpeakeasyBase {
    queryParams: PostListUserTagsQueryParams;
    headers: PostListUserTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListUserTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
