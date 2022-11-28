import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteNotificationXAmzTargetEnum {
    AwsBudgetServiceGatewayDeleteNotification = "AWSBudgetServiceGateway.DeleteNotification"
}
export declare class DeleteNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotificationXAmzTargetEnum;
}
export declare class DeleteNotificationRequest extends SpeakeasyBase {
    headers: DeleteNotificationHeaders;
    request: shared.DeleteNotificationRequest;
}
export declare class DeleteNotificationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteNotificationResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
