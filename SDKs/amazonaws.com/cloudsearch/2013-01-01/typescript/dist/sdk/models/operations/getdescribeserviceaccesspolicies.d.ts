import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeServiceAccessPoliciesActionEnum {
    DescribeServiceAccessPolicies = "DescribeServiceAccessPolicies"
}
export declare enum GetDescribeServiceAccessPoliciesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeServiceAccessPoliciesQueryParams extends SpeakeasyBase {
    action: GetDescribeServiceAccessPoliciesActionEnum;
    deployed?: boolean;
    domainName: string;
    version: GetDescribeServiceAccessPoliciesVersionEnum;
}
export declare class GetDescribeServiceAccessPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeServiceAccessPoliciesRequest extends SpeakeasyBase {
    queryParams: GetDescribeServiceAccessPoliciesQueryParams;
    headers: GetDescribeServiceAccessPoliciesHeaders;
}
export declare class GetDescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
