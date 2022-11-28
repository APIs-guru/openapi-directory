import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ForgetDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceForgetDevice = "AWSCognitoIdentityProviderService.ForgetDevice"
}
export declare class ForgetDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ForgetDeviceXAmzTargetEnum;
}
export declare class ForgetDeviceRequest extends SpeakeasyBase {
    headers: ForgetDeviceHeaders;
    request: shared.ForgetDeviceRequest;
}
export declare class ForgetDeviceResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
