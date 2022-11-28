import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminUpdateDeviceStatusXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminUpdateDeviceStatus = "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus"
}
export declare class AdminUpdateDeviceStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUpdateDeviceStatusXAmzTargetEnum;
}
export declare class AdminUpdateDeviceStatusRequest extends SpeakeasyBase {
    headers: AdminUpdateDeviceStatusHeaders;
    request: shared.AdminUpdateDeviceStatusRequest;
}
export declare class AdminUpdateDeviceStatusResponse extends SpeakeasyBase {
    adminUpdateDeviceStatusResponse?: Map<string, any>;
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
