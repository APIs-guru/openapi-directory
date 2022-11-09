import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeSpotDatafeedSubscriptionActionEnum {
    DescribeSpotDatafeedSubscription = "DescribeSpotDatafeedSubscription"
}
export declare enum GetDescribeSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
    action: GetDescribeSpotDatafeedSubscriptionActionEnum;
    dryRun?: boolean;
    version: GetDescribeSpotDatafeedSubscriptionVersionEnum;
}
export declare class GetDescribeSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetDescribeSpotDatafeedSubscriptionQueryParams;
    headers: GetDescribeSpotDatafeedSubscriptionHeaders;
}
export declare class GetDescribeSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
