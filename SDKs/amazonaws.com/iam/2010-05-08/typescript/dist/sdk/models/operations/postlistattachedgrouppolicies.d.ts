import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListAttachedGroupPoliciesActionEnum {
    ListAttachedGroupPolicies = "ListAttachedGroupPolicies"
}
export declare enum PostListAttachedGroupPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListAttachedGroupPoliciesQueryParams extends SpeakeasyBase {
    action: PostListAttachedGroupPoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListAttachedGroupPoliciesVersionEnum;
}
export declare class PostListAttachedGroupPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAttachedGroupPoliciesRequest extends SpeakeasyBase {
    queryParams: PostListAttachedGroupPoliciesQueryParams;
    headers: PostListAttachedGroupPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListAttachedGroupPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
