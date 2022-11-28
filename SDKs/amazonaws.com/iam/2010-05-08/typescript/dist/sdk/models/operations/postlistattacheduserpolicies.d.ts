import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListAttachedUserPoliciesActionEnum {
    ListAttachedUserPolicies = "ListAttachedUserPolicies"
}
export declare enum PostListAttachedUserPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListAttachedUserPoliciesQueryParams extends SpeakeasyBase {
    action: PostListAttachedUserPoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListAttachedUserPoliciesVersionEnum;
}
export declare class PostListAttachedUserPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAttachedUserPoliciesRequest extends SpeakeasyBase {
    queryParams: PostListAttachedUserPoliciesQueryParams;
    headers: PostListAttachedUserPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListAttachedUserPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
