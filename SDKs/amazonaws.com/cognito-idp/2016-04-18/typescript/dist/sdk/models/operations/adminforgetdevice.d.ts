import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminForgetDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminForgetDevice = "AWSCognitoIdentityProviderService.AdminForgetDevice"
}
export declare class AdminForgetDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminForgetDeviceXAmzTargetEnum;
}
export declare class AdminForgetDeviceRequest extends SpeakeasyBase {
    headers: AdminForgetDeviceHeaders;
    request: shared.AdminForgetDeviceRequest;
}
export declare class AdminForgetDeviceResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
