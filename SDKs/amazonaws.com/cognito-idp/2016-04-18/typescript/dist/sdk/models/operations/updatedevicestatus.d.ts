import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDeviceStatusXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateDeviceStatus = "AWSCognitoIdentityProviderService.UpdateDeviceStatus"
}
export declare class UpdateDeviceStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeviceStatusXAmzTargetEnum;
}
export declare class UpdateDeviceStatusRequest extends SpeakeasyBase {
    headers: UpdateDeviceStatusHeaders;
    request: shared.UpdateDeviceStatusRequest;
}
export declare class UpdateDeviceStatusResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateDeviceStatusResponse?: Map<string, any>;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
