import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminGetDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminGetDevice = "AWSCognitoIdentityProviderService.AdminGetDevice"
}
export declare class AdminGetDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminGetDeviceXAmzTargetEnum;
}
export declare class AdminGetDeviceRequest extends SpeakeasyBase {
    headers: AdminGetDeviceHeaders;
    request: shared.AdminGetDeviceRequest;
}
export declare class AdminGetDeviceResponse extends SpeakeasyBase {
    adminGetDeviceResponse?: shared.AdminGetDeviceResponse;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
