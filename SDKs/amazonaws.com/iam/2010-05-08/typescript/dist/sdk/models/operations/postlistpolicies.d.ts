import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListPoliciesActionEnum {
    ListPolicies = "ListPolicies"
}
export declare enum PostListPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListPoliciesQueryParams extends SpeakeasyBase {
    action: PostListPoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListPoliciesVersionEnum;
}
export declare class PostListPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListPoliciesRequest extends SpeakeasyBase {
    queryParams: PostListPoliciesQueryParams;
    headers: PostListPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
