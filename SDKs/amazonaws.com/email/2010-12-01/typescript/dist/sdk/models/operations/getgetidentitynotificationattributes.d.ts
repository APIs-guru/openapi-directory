import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetIdentityNotificationAttributesActionEnum {
    GetIdentityNotificationAttributes = "GetIdentityNotificationAttributes"
}
export declare enum GetGetIdentityNotificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetIdentityNotificationAttributesQueryParams extends SpeakeasyBase {
    action: GetGetIdentityNotificationAttributesActionEnum;
    identities: string[];
    version: GetGetIdentityNotificationAttributesVersionEnum;
}
export declare class GetGetIdentityNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetIdentityNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: GetGetIdentityNotificationAttributesQueryParams;
    headers: GetGetIdentityNotificationAttributesHeaders;
}
export declare class GetGetIdentityNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
