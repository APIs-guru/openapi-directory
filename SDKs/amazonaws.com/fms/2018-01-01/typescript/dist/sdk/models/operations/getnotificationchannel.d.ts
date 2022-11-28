import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetNotificationChannelXAmzTargetEnum {
    Awsfms20180101GetNotificationChannel = "AWSFMS_20180101.GetNotificationChannel"
}
export declare class GetNotificationChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNotificationChannelXAmzTargetEnum;
}
export declare class GetNotificationChannelRequest extends SpeakeasyBase {
    headers: GetNotificationChannelHeaders;
    request: Map<string, any>;
}
export declare class GetNotificationChannelResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationChannelResponse?: shared.GetNotificationChannelResponse;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
