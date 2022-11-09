import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeAutoScalingNotificationTypesActionEnum {
    DescribeAutoScalingNotificationTypes = "DescribeAutoScalingNotificationTypes"
}
export declare enum GetDescribeAutoScalingNotificationTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeAutoScalingNotificationTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeAutoScalingNotificationTypesActionEnum;
    version: GetDescribeAutoScalingNotificationTypesVersionEnum;
}
export declare class GetDescribeAutoScalingNotificationTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAutoScalingNotificationTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAutoScalingNotificationTypesQueryParams;
    headers: GetDescribeAutoScalingNotificationTypesHeaders;
}
export declare class GetDescribeAutoScalingNotificationTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
