import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeTargetGroupAttributesActionEnum {
    DescribeTargetGroupAttributes = "DescribeTargetGroupAttributes"
}
export declare enum GetDescribeTargetGroupAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDescribeTargetGroupAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeTargetGroupAttributesActionEnum;
    targetGroupArn: string;
    version: GetDescribeTargetGroupAttributesVersionEnum;
}
export declare class GetDescribeTargetGroupAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeTargetGroupAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeTargetGroupAttributesQueryParams;
    headers: GetDescribeTargetGroupAttributesHeaders;
}
export declare class GetDescribeTargetGroupAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
