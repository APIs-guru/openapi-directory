import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmDevice = "AWSCognitoIdentityProviderService.ConfirmDevice"
}
export declare class ConfirmDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmDeviceXAmzTargetEnum;
}
export declare class ConfirmDeviceRequest extends SpeakeasyBase {
    headers: ConfirmDeviceHeaders;
    request: shared.ConfirmDeviceRequest;
}
export declare class ConfirmDeviceResponse extends SpeakeasyBase {
    confirmDeviceResponse?: shared.ConfirmDeviceResponse;
    contentType: string;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
    usernameExistsException?: any;
}
