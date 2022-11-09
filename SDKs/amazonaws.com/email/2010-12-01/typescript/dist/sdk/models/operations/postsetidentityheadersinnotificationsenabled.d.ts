import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetIdentityHeadersInNotificationsEnabledActionEnum {
    SetIdentityHeadersInNotificationsEnabled = "SetIdentityHeadersInNotificationsEnabled"
}
export declare enum PostSetIdentityHeadersInNotificationsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetIdentityHeadersInNotificationsEnabledQueryParams extends SpeakeasyBase {
    action: PostSetIdentityHeadersInNotificationsEnabledActionEnum;
    version: PostSetIdentityHeadersInNotificationsEnabledVersionEnum;
}
export declare class PostSetIdentityHeadersInNotificationsEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetIdentityHeadersInNotificationsEnabledRequest extends SpeakeasyBase {
    queryParams: PostSetIdentityHeadersInNotificationsEnabledQueryParams;
    headers: PostSetIdentityHeadersInNotificationsEnabledHeaders;
    request?: Uint8Array;
}
export declare class PostSetIdentityHeadersInNotificationsEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
