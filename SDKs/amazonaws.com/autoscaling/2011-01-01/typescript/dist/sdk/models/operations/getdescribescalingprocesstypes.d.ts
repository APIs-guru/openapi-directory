import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeScalingProcessTypesActionEnum {
    DescribeScalingProcessTypes = "DescribeScalingProcessTypes"
}
export declare enum GetDescribeScalingProcessTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeScalingProcessTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeScalingProcessTypesActionEnum;
    version: GetDescribeScalingProcessTypesVersionEnum;
}
export declare class GetDescribeScalingProcessTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeScalingProcessTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeScalingProcessTypesQueryParams;
    headers: GetDescribeScalingProcessTypesHeaders;
}
export declare class GetDescribeScalingProcessTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
