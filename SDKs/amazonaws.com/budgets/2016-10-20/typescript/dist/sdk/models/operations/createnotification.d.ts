import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateNotificationXAmzTargetEnum {
    AwsBudgetServiceGatewayCreateNotification = "AWSBudgetServiceGateway.CreateNotification"
}
export declare class CreateNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotificationXAmzTargetEnum;
}
export declare class CreateNotificationRequest extends SpeakeasyBase {
    headers: CreateNotificationHeaders;
    request: shared.CreateNotificationRequest;
}
export declare class CreateNotificationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createNotificationResponse?: Map<string, any>;
    creationLimitExceededException?: any;
    duplicateRecordException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
