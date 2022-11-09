import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPutNotificationConfigurationActionEnum {
    PutNotificationConfiguration = "PutNotificationConfiguration"
}
export declare enum GetPutNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetPutNotificationConfigurationQueryParams extends SpeakeasyBase {
    action: GetPutNotificationConfigurationActionEnum;
    autoScalingGroupName: string;
    notificationTypes: string[];
    topicArn: string;
    version: GetPutNotificationConfigurationVersionEnum;
}
export declare class GetPutNotificationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutNotificationConfigurationRequest extends SpeakeasyBase {
    queryParams: GetPutNotificationConfigurationQueryParams;
    headers: GetPutNotificationConfigurationHeaders;
}
export declare class GetPutNotificationConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
