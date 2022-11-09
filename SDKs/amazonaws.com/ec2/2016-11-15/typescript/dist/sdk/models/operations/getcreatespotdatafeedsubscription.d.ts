import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateSpotDatafeedSubscriptionActionEnum {
    CreateSpotDatafeedSubscription = "CreateSpotDatafeedSubscription"
}
export declare enum GetCreateSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
    action: GetCreateSpotDatafeedSubscriptionActionEnum;
    bucket: string;
    dryRun?: boolean;
    prefix?: string;
    version: GetCreateSpotDatafeedSubscriptionVersionEnum;
}
export declare class GetCreateSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetCreateSpotDatafeedSubscriptionQueryParams;
    headers: GetCreateSpotDatafeedSubscriptionHeaders;
}
export declare class GetCreateSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
