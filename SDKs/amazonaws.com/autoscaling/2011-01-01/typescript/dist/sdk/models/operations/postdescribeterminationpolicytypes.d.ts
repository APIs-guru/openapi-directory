import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTerminationPolicyTypesActionEnum {
    DescribeTerminationPolicyTypes = "DescribeTerminationPolicyTypes"
}
export declare enum PostDescribeTerminationPolicyTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeTerminationPolicyTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeTerminationPolicyTypesActionEnum;
    version: PostDescribeTerminationPolicyTypesVersionEnum;
}
export declare class PostDescribeTerminationPolicyTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTerminationPolicyTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeTerminationPolicyTypesQueryParams;
    headers: PostDescribeTerminationPolicyTypesHeaders;
}
export declare class PostDescribeTerminationPolicyTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
