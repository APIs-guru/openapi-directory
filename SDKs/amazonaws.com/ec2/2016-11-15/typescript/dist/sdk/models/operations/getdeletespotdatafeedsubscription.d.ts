import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSpotDatafeedSubscriptionActionEnum {
    DeleteSpotDatafeedSubscription = "DeleteSpotDatafeedSubscription"
}
export declare enum GetDeleteSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
    action: GetDeleteSpotDatafeedSubscriptionActionEnum;
    dryRun?: boolean;
    version: GetDeleteSpotDatafeedSubscriptionVersionEnum;
}
export declare class GetDeleteSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetDeleteSpotDatafeedSubscriptionQueryParams;
    headers: GetDeleteSpotDatafeedSubscriptionHeaders;
}
export declare class GetDeleteSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
