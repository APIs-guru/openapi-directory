import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum VerifyUserAttributeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceVerifyUserAttribute = "AWSCognitoIdentityProviderService.VerifyUserAttribute"
}
export declare class VerifyUserAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifyUserAttributeXAmzTargetEnum;
}
export declare class VerifyUserAttributeRequest extends SpeakeasyBase {
    headers: VerifyUserAttributeHeaders;
    request: shared.VerifyUserAttributeRequest;
}
export declare class VerifyUserAttributeResponse extends SpeakeasyBase {
    codeMismatchException?: any;
    contentType: string;
    expiredCodeException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
    verifyUserAttributeResponse?: Map<string, any>;
}
