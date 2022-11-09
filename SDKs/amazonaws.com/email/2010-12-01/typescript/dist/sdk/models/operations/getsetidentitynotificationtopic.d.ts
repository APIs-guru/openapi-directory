import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetIdentityNotificationTopicActionEnum {
    SetIdentityNotificationTopic = "SetIdentityNotificationTopic"
}
export declare enum GetSetIdentityNotificationTopicNotificationTypeEnum {
    Bounce = "Bounce",
    Complaint = "Complaint",
    Delivery = "Delivery"
}
export declare enum GetSetIdentityNotificationTopicVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetIdentityNotificationTopicQueryParams extends SpeakeasyBase {
    action: GetSetIdentityNotificationTopicActionEnum;
    identity: string;
    notificationType: GetSetIdentityNotificationTopicNotificationTypeEnum;
    snsTopic?: string;
    version: GetSetIdentityNotificationTopicVersionEnum;
}
export declare class GetSetIdentityNotificationTopicHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetIdentityNotificationTopicRequest extends SpeakeasyBase {
    queryParams: GetSetIdentityNotificationTopicQueryParams;
    headers: GetSetIdentityNotificationTopicHeaders;
}
export declare class GetSetIdentityNotificationTopicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
