import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeTerminationPolicyTypesActionEnum {
    DescribeTerminationPolicyTypes = "DescribeTerminationPolicyTypes"
}
export declare enum GetDescribeTerminationPolicyTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeTerminationPolicyTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeTerminationPolicyTypesActionEnum;
    version: GetDescribeTerminationPolicyTypesVersionEnum;
}
export declare class GetDescribeTerminationPolicyTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeTerminationPolicyTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeTerminationPolicyTypesQueryParams;
    headers: GetDescribeTerminationPolicyTypesHeaders;
}
export declare class GetDescribeTerminationPolicyTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
