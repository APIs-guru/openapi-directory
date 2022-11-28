import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSslPoliciesActionEnum {
    DescribeSslPolicies = "DescribeSSLPolicies"
}
export declare enum PostDescribeSslPoliciesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeSslPoliciesQueryParams extends SpeakeasyBase {
    action: PostDescribeSslPoliciesActionEnum;
    version: PostDescribeSslPoliciesVersionEnum;
}
export declare class PostDescribeSslPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSslPoliciesRequest extends SpeakeasyBase {
    queryParams: PostDescribeSslPoliciesQueryParams;
    headers: PostDescribeSslPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSslPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
