import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListAttachedRolePoliciesActionEnum {
    ListAttachedRolePolicies = "ListAttachedRolePolicies"
}
export declare enum PostListAttachedRolePoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListAttachedRolePoliciesQueryParams extends SpeakeasyBase {
    action: PostListAttachedRolePoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListAttachedRolePoliciesVersionEnum;
}
export declare class PostListAttachedRolePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAttachedRolePoliciesRequest extends SpeakeasyBase {
    queryParams: PostListAttachedRolePoliciesQueryParams;
    headers: PostListAttachedRolePoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListAttachedRolePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
