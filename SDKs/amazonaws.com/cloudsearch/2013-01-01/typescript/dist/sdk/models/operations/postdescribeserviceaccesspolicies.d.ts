import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeServiceAccessPoliciesActionEnum {
    DescribeServiceAccessPolicies = "DescribeServiceAccessPolicies"
}
export declare enum PostDescribeServiceAccessPoliciesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeServiceAccessPoliciesQueryParams extends SpeakeasyBase {
    action: PostDescribeServiceAccessPoliciesActionEnum;
    version: PostDescribeServiceAccessPoliciesVersionEnum;
}
export declare class PostDescribeServiceAccessPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeServiceAccessPoliciesRequest extends SpeakeasyBase {
    queryParams: PostDescribeServiceAccessPoliciesQueryParams;
    headers: PostDescribeServiceAccessPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
