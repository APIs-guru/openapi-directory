import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeScalingProcessTypesActionEnum {
    DescribeScalingProcessTypes = "DescribeScalingProcessTypes"
}
export declare enum PostDescribeScalingProcessTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeScalingProcessTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeScalingProcessTypesActionEnum;
    version: PostDescribeScalingProcessTypesVersionEnum;
}
export declare class PostDescribeScalingProcessTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeScalingProcessTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeScalingProcessTypesQueryParams;
    headers: PostDescribeScalingProcessTypesHeaders;
}
export declare class PostDescribeScalingProcessTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
