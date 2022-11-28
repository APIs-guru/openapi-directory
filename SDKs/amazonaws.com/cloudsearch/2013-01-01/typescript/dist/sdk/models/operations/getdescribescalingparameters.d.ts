import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeScalingParametersActionEnum {
    DescribeScalingParameters = "DescribeScalingParameters"
}
export declare enum GetDescribeScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeScalingParametersQueryParams extends SpeakeasyBase {
    action: GetDescribeScalingParametersActionEnum;
    domainName: string;
    version: GetDescribeScalingParametersVersionEnum;
}
export declare class GetDescribeScalingParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeScalingParametersRequest extends SpeakeasyBase {
    queryParams: GetDescribeScalingParametersQueryParams;
    headers: GetDescribeScalingParametersHeaders;
}
export declare class GetDescribeScalingParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
