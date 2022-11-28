import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteNotificationChannelXAmzTargetEnum {
    Awsfms20180101DeleteNotificationChannel = "AWSFMS_20180101.DeleteNotificationChannel"
}
export declare class DeleteNotificationChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotificationChannelXAmzTargetEnum;
}
export declare class DeleteNotificationChannelRequest extends SpeakeasyBase {
    headers: DeleteNotificationChannelHeaders;
    request: Map<string, any>;
}
export declare class DeleteNotificationChannelResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
