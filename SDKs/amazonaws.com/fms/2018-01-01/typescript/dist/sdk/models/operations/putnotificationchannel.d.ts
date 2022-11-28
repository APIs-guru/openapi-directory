import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutNotificationChannelXAmzTargetEnum {
    Awsfms20180101PutNotificationChannel = "AWSFMS_20180101.PutNotificationChannel"
}
export declare class PutNotificationChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutNotificationChannelXAmzTargetEnum;
}
export declare class PutNotificationChannelRequest extends SpeakeasyBase {
    headers: PutNotificationChannelHeaders;
    request: shared.PutNotificationChannelRequest;
}
export declare class PutNotificationChannelResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
