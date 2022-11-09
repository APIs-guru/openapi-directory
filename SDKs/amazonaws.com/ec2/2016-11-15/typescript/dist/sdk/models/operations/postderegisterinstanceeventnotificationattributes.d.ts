import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeregisterInstanceEventNotificationAttributesActionEnum {
    DeregisterInstanceEventNotificationAttributes = "DeregisterInstanceEventNotificationAttributes"
}
export declare enum PostDeregisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeregisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
    action: PostDeregisterInstanceEventNotificationAttributesActionEnum;
    version: PostDeregisterInstanceEventNotificationAttributesVersionEnum;
}
export declare class PostDeregisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: PostDeregisterInstanceEventNotificationAttributesQueryParams;
    headers: PostDeregisterInstanceEventNotificationAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
