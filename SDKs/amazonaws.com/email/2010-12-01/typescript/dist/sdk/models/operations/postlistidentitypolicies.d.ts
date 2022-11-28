import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListIdentityPoliciesActionEnum {
    ListIdentityPolicies = "ListIdentityPolicies"
}
export declare enum PostListIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListIdentityPoliciesQueryParams extends SpeakeasyBase {
    action: PostListIdentityPoliciesActionEnum;
    version: PostListIdentityPoliciesVersionEnum;
}
export declare class PostListIdentityPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListIdentityPoliciesRequest extends SpeakeasyBase {
    queryParams: PostListIdentityPoliciesQueryParams;
    headers: PostListIdentityPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListIdentityPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
