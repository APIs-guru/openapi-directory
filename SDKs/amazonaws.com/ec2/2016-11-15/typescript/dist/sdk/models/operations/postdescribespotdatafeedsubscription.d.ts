import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSpotDatafeedSubscriptionActionEnum {
    DescribeSpotDatafeedSubscription = "DescribeSpotDatafeedSubscription"
}
export declare enum PostDescribeSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
    action: PostDescribeSpotDatafeedSubscriptionActionEnum;
    version: PostDescribeSpotDatafeedSubscriptionVersionEnum;
}
export declare class PostDescribeSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostDescribeSpotDatafeedSubscriptionQueryParams;
    headers: PostDescribeSpotDatafeedSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
