import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeInstanceEventNotificationAttributesActionEnum {
    DescribeInstanceEventNotificationAttributes = "DescribeInstanceEventNotificationAttributes"
}
export declare enum PostDescribeInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceEventNotificationAttributesActionEnum;
    version: PostDescribeInstanceEventNotificationAttributesVersionEnum;
}
export declare class PostDescribeInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceEventNotificationAttributesQueryParams;
    headers: PostDescribeInstanceEventNotificationAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
