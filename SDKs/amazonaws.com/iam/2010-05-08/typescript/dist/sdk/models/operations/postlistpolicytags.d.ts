import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListPolicyTagsActionEnum {
    ListPolicyTags = "ListPolicyTags"
}
export declare enum PostListPolicyTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListPolicyTagsQueryParams extends SpeakeasyBase {
    action: PostListPolicyTagsActionEnum;
    version: PostListPolicyTagsVersionEnum;
}
export declare class PostListPolicyTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListPolicyTagsRequest extends SpeakeasyBase {
    queryParams: PostListPolicyTagsQueryParams;
    headers: PostListPolicyTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListPolicyTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
