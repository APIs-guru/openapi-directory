import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListRoleTagsActionEnum {
    ListRoleTags = "ListRoleTags"
}
export declare enum PostListRoleTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListRoleTagsQueryParams extends SpeakeasyBase {
    action: PostListRoleTagsActionEnum;
    version: PostListRoleTagsVersionEnum;
}
export declare class PostListRoleTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListRoleTagsRequest extends SpeakeasyBase {
    queryParams: PostListRoleTagsQueryParams;
    headers: PostListRoleTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListRoleTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
