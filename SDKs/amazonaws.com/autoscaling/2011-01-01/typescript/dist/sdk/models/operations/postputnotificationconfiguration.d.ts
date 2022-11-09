import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutNotificationConfigurationActionEnum {
    PutNotificationConfiguration = "PutNotificationConfiguration"
}
export declare enum PostPutNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostPutNotificationConfigurationQueryParams extends SpeakeasyBase {
    action: PostPutNotificationConfigurationActionEnum;
    version: PostPutNotificationConfigurationVersionEnum;
}
export declare class PostPutNotificationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutNotificationConfigurationRequest extends SpeakeasyBase {
    queryParams: PostPutNotificationConfigurationQueryParams;
    headers: PostPutNotificationConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostPutNotificationConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
