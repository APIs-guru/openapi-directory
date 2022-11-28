import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetIdentityNotificationTopicActionEnum {
    SetIdentityNotificationTopic = "SetIdentityNotificationTopic"
}
export declare enum PostSetIdentityNotificationTopicVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetIdentityNotificationTopicQueryParams extends SpeakeasyBase {
    action: PostSetIdentityNotificationTopicActionEnum;
    version: PostSetIdentityNotificationTopicVersionEnum;
}
export declare class PostSetIdentityNotificationTopicHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetIdentityNotificationTopicRequest extends SpeakeasyBase {
    queryParams: PostSetIdentityNotificationTopicQueryParams;
    headers: PostSetIdentityNotificationTopicHeaders;
    request?: Uint8Array;
}
export declare class PostSetIdentityNotificationTopicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
