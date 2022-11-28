import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAuthEventFeedbackXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateAuthEventFeedback = "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback"
}
export declare class UpdateAuthEventFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAuthEventFeedbackXAmzTargetEnum;
}
export declare class UpdateAuthEventFeedbackRequest extends SpeakeasyBase {
    headers: UpdateAuthEventFeedbackHeaders;
    request: shared.UpdateAuthEventFeedbackRequest;
}
export declare class UpdateAuthEventFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateAuthEventFeedbackResponse?: Map<string, any>;
    userNotFoundException?: any;
    userPoolAddOnNotEnabledException?: any;
}
