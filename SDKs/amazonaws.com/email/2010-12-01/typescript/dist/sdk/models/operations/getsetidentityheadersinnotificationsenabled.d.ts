import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetIdentityHeadersInNotificationsEnabledActionEnum {
    SetIdentityHeadersInNotificationsEnabled = "SetIdentityHeadersInNotificationsEnabled"
}
export declare enum GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum {
    Bounce = "Bounce",
    Complaint = "Complaint",
    Delivery = "Delivery"
}
export declare enum GetSetIdentityHeadersInNotificationsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetIdentityHeadersInNotificationsEnabledQueryParams extends SpeakeasyBase {
    action: GetSetIdentityHeadersInNotificationsEnabledActionEnum;
    enabled: boolean;
    identity: string;
    notificationType: GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;
    version: GetSetIdentityHeadersInNotificationsEnabledVersionEnum;
}
export declare class GetSetIdentityHeadersInNotificationsEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetIdentityHeadersInNotificationsEnabledRequest extends SpeakeasyBase {
    queryParams: GetSetIdentityHeadersInNotificationsEnabledQueryParams;
    headers: GetSetIdentityHeadersInNotificationsEnabledHeaders;
}
export declare class GetSetIdentityHeadersInNotificationsEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
