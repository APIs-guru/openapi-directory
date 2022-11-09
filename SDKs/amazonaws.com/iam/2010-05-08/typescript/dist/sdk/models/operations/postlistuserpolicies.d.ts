import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListUserPoliciesActionEnum {
    ListUserPolicies = "ListUserPolicies"
}
export declare enum PostListUserPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListUserPoliciesQueryParams extends SpeakeasyBase {
    action: PostListUserPoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListUserPoliciesVersionEnum;
}
export declare class PostListUserPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListUserPoliciesRequest extends SpeakeasyBase {
    queryParams: PostListUserPoliciesQueryParams;
    headers: PostListUserPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListUserPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
