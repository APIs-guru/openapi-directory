import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteSpotDatafeedSubscriptionActionEnum {
    DeleteSpotDatafeedSubscription = "DeleteSpotDatafeedSubscription"
}
export declare enum PostDeleteSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
    action: PostDeleteSpotDatafeedSubscriptionActionEnum;
    version: PostDeleteSpotDatafeedSubscriptionVersionEnum;
}
export declare class PostDeleteSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostDeleteSpotDatafeedSubscriptionQueryParams;
    headers: PostDeleteSpotDatafeedSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
