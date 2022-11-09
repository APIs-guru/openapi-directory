import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeSslPoliciesActionEnum {
    DescribeSslPolicies = "DescribeSSLPolicies"
}
export declare enum GetDescribeSslPoliciesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDescribeSslPoliciesQueryParams extends SpeakeasyBase {
    action: GetDescribeSslPoliciesActionEnum;
    marker?: string;
    names?: string[];
    pageSize?: number;
    version: GetDescribeSslPoliciesVersionEnum;
}
export declare class GetDescribeSslPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSslPoliciesRequest extends SpeakeasyBase {
    queryParams: GetDescribeSslPoliciesQueryParams;
    headers: GetDescribeSslPoliciesHeaders;
}
export declare class GetDescribeSslPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
