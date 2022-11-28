import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminListDevicesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminListDevices = "AWSCognitoIdentityProviderService.AdminListDevices"
}
export declare class AdminListDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminListDevicesXAmzTargetEnum;
}
export declare class AdminListDevicesRequest extends SpeakeasyBase {
    headers: AdminListDevicesHeaders;
    request: shared.AdminListDevicesRequest;
}
export declare class AdminListDevicesResponse extends SpeakeasyBase {
    adminListDevicesResponse?: shared.AdminListDevicesResponse;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
