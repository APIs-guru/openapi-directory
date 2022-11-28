import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDevicesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListDevices = "AWSCognitoIdentityProviderService.ListDevices"
}
export declare class ListDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDevicesXAmzTargetEnum;
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    headers: ListDevicesHeaders;
    request: shared.ListDevicesRequest;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidUserPoolConfigurationException?: any;
    listDevicesResponse?: shared.ListDevicesResponse;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
