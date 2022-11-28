import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetIdentityNotificationAttributesActionEnum {
    GetIdentityNotificationAttributes = "GetIdentityNotificationAttributes"
}
export declare enum PostGetIdentityNotificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetIdentityNotificationAttributesQueryParams extends SpeakeasyBase {
    action: PostGetIdentityNotificationAttributesActionEnum;
    version: PostGetIdentityNotificationAttributesVersionEnum;
}
export declare class PostGetIdentityNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetIdentityNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: PostGetIdentityNotificationAttributesQueryParams;
    headers: PostGetIdentityNotificationAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostGetIdentityNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
