import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum VerifySoftwareTokenXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceVerifySoftwareToken = "AWSCognitoIdentityProviderService.VerifySoftwareToken"
}
export declare class VerifySoftwareTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifySoftwareTokenXAmzTargetEnum;
}
export declare class VerifySoftwareTokenRequest extends SpeakeasyBase {
    headers: VerifySoftwareTokenHeaders;
    request: shared.VerifySoftwareTokenRequest;
}
export declare class VerifySoftwareTokenResponse extends SpeakeasyBase {
    codeMismatchException?: any;
    contentType: string;
    enableSoftwareTokenMfaException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    softwareTokenMfaNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
    verifySoftwareTokenResponse?: shared.VerifySoftwareTokenResponse;
}
