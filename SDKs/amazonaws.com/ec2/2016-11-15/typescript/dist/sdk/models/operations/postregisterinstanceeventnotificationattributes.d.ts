import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRegisterInstanceEventNotificationAttributesActionEnum {
    RegisterInstanceEventNotificationAttributes = "RegisterInstanceEventNotificationAttributes"
}
export declare enum PostRegisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRegisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
    action: PostRegisterInstanceEventNotificationAttributesActionEnum;
    version: PostRegisterInstanceEventNotificationAttributesVersionEnum;
}
export declare class PostRegisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: PostRegisterInstanceEventNotificationAttributesQueryParams;
    headers: PostRegisterInstanceEventNotificationAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
