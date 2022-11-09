import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateSpotDatafeedSubscriptionActionEnum {
    CreateSpotDatafeedSubscription = "CreateSpotDatafeedSubscription"
}
export declare enum PostCreateSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
    action: PostCreateSpotDatafeedSubscriptionActionEnum;
    version: PostCreateSpotDatafeedSubscriptionVersionEnum;
}
export declare class PostCreateSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostCreateSpotDatafeedSubscriptionQueryParams;
    headers: PostCreateSpotDatafeedSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
