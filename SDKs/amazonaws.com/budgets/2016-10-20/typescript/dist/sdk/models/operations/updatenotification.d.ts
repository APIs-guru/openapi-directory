import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateNotificationXAmzTargetEnum {
    AwsBudgetServiceGatewayUpdateNotification = "AWSBudgetServiceGateway.UpdateNotification"
}
export declare class UpdateNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotificationXAmzTargetEnum;
}
export declare class UpdateNotificationRequest extends SpeakeasyBase {
    headers: UpdateNotificationHeaders;
    request: shared.UpdateNotificationRequest;
}
export declare class UpdateNotificationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    duplicateRecordException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
    updateNotificationResponse?: Map<string, any>;
}
