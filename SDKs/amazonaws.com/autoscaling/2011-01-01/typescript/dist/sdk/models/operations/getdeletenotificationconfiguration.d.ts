import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteNotificationConfigurationActionEnum {
    DeleteNotificationConfiguration = "DeleteNotificationConfiguration"
}
export declare enum GetDeleteNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDeleteNotificationConfigurationQueryParams extends SpeakeasyBase {
    action: GetDeleteNotificationConfigurationActionEnum;
    autoScalingGroupName: string;
    topicArn: string;
    version: GetDeleteNotificationConfigurationVersionEnum;
}
export declare class GetDeleteNotificationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNotificationConfigurationRequest extends SpeakeasyBase {
    queryParams: GetDeleteNotificationConfigurationQueryParams;
    headers: GetDeleteNotificationConfigurationHeaders;
}
export declare class GetDeleteNotificationConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
