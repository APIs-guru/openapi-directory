import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeScalingParametersActionEnum {
    DescribeScalingParameters = "DescribeScalingParameters"
}
export declare enum PostDescribeScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeScalingParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeScalingParametersActionEnum;
    version: PostDescribeScalingParametersVersionEnum;
}
export declare class PostDescribeScalingParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeScalingParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeScalingParametersQueryParams;
    headers: PostDescribeScalingParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeScalingParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
