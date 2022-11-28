import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminUpdateAuthEventFeedbackXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback = "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback"
}
export declare class AdminUpdateAuthEventFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUpdateAuthEventFeedbackXAmzTargetEnum;
}
export declare class AdminUpdateAuthEventFeedbackRequest extends SpeakeasyBase {
    headers: AdminUpdateAuthEventFeedbackHeaders;
    request: shared.AdminUpdateAuthEventFeedbackRequest;
}
export declare class AdminUpdateAuthEventFeedbackResponse extends SpeakeasyBase {
    adminUpdateAuthEventFeedbackResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
    userPoolAddOnNotEnabledException?: any;
}
