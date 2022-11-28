import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListInstanceProfileTagsActionEnum {
    ListInstanceProfileTags = "ListInstanceProfileTags"
}
export declare enum PostListInstanceProfileTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListInstanceProfileTagsQueryParams extends SpeakeasyBase {
    action: PostListInstanceProfileTagsActionEnum;
    version: PostListInstanceProfileTagsVersionEnum;
}
export declare class PostListInstanceProfileTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListInstanceProfileTagsRequest extends SpeakeasyBase {
    queryParams: PostListInstanceProfileTagsQueryParams;
    headers: PostListInstanceProfileTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListInstanceProfileTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
