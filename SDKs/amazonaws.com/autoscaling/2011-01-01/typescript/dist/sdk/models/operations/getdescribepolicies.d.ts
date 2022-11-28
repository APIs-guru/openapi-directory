import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribePoliciesActionEnum {
    DescribePolicies = "DescribePolicies"
}
export declare enum GetDescribePoliciesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribePoliciesQueryParams extends SpeakeasyBase {
    action: GetDescribePoliciesActionEnum;
    autoScalingGroupName?: string;
    maxRecords?: number;
    nextToken?: string;
    policyNames?: string[];
    policyTypes?: string[];
    version: GetDescribePoliciesVersionEnum;
}
export declare class GetDescribePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribePoliciesRequest extends SpeakeasyBase {
    queryParams: GetDescribePoliciesQueryParams;
    headers: GetDescribePoliciesHeaders;
}
export declare class GetDescribePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
