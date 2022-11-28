import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GlobalSignOutXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGlobalSignOut = "AWSCognitoIdentityProviderService.GlobalSignOut"
}
export declare class GlobalSignOutHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GlobalSignOutXAmzTargetEnum;
}
export declare class GlobalSignOutRequest extends SpeakeasyBase {
    headers: GlobalSignOutHeaders;
    request: shared.GlobalSignOutRequest;
}
export declare class GlobalSignOutResponse extends SpeakeasyBase {
    contentType: string;
    globalSignOutResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
}
