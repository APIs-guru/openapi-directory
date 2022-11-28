import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAutoScalingNotificationTypesActionEnum {
    DescribeAutoScalingNotificationTypes = "DescribeAutoScalingNotificationTypes"
}
export declare enum PostDescribeAutoScalingNotificationTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeAutoScalingNotificationTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeAutoScalingNotificationTypesActionEnum;
    version: PostDescribeAutoScalingNotificationTypesVersionEnum;
}
export declare class PostDescribeAutoScalingNotificationTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAutoScalingNotificationTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAutoScalingNotificationTypesQueryParams;
    headers: PostDescribeAutoScalingNotificationTypesHeaders;
}
export declare class PostDescribeAutoScalingNotificationTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
