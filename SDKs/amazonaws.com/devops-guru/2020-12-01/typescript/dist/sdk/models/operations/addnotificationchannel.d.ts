import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddNotificationChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
export declare class AddNotificationChannelRequestBodyConfig extends SpeakeasyBase {
    sns?: shared.SnsChannelConfig;
}
export declare class AddNotificationChannelRequestBody extends SpeakeasyBase {
    config: AddNotificationChannelRequestBodyConfig;
}
export declare class AddNotificationChannelRequest extends SpeakeasyBase {
    headers: AddNotificationChannelHeaders;
    request: AddNotificationChannelRequestBody;
}
export declare class AddNotificationChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    addNotificationChannelResponse?: shared.AddNotificationChannelResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
