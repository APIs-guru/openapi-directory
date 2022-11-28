import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePipelineNotificationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatePipelineNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export declare class UpdatePipelineNotificationsRequestBodyNotifications extends SpeakeasyBase {
    completed?: string;
    error?: string;
    progressing?: string;
    warning?: string;
}
export declare class UpdatePipelineNotificationsRequestBody extends SpeakeasyBase {
    notifications: UpdatePipelineNotificationsRequestBodyNotifications;
}
export declare class UpdatePipelineNotificationsRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineNotificationsPathParams;
    headers: UpdatePipelineNotificationsHeaders;
    request: UpdatePipelineNotificationsRequestBody;
}
export declare class UpdatePipelineNotificationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updatePipelineNotificationsResponse?: shared.UpdatePipelineNotificationsResponse;
    validationException?: any;
}
