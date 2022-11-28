import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListGroupPoliciesActionEnum {
    ListGroupPolicies = "ListGroupPolicies"
}
export declare enum PostListGroupPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListGroupPoliciesQueryParams extends SpeakeasyBase {
    action: PostListGroupPoliciesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListGroupPoliciesVersionEnum;
}
export declare class PostListGroupPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListGroupPoliciesRequest extends SpeakeasyBase {
    queryParams: PostListGroupPoliciesQueryParams;
    headers: PostListGroupPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostListGroupPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
