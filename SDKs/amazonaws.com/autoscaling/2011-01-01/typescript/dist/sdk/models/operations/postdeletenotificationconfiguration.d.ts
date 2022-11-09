import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteNotificationConfigurationActionEnum {
    DeleteNotificationConfiguration = "DeleteNotificationConfiguration"
}
export declare enum PostDeleteNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDeleteNotificationConfigurationQueryParams extends SpeakeasyBase {
    action: PostDeleteNotificationConfigurationActionEnum;
    version: PostDeleteNotificationConfigurationVersionEnum;
}
export declare class PostDeleteNotificationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNotificationConfigurationRequest extends SpeakeasyBase {
    queryParams: PostDeleteNotificationConfigurationQueryParams;
    headers: PostDeleteNotificationConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNotificationConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
