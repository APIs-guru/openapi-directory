import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetDevice = "AWSCognitoIdentityProviderService.GetDevice"
}
export declare class GetDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeviceXAmzTargetEnum;
}
export declare class GetDeviceRequest extends SpeakeasyBase {
    headers: GetDeviceHeaders;
    request: shared.GetDeviceRequest;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    contentType: string;
    getDeviceResponse?: shared.GetDeviceResponse;
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
