import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminDisableProviderForUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminDisableProviderForUser = "AWSCognitoIdentityProviderService.AdminDisableProviderForUser"
}
export declare class AdminDisableProviderForUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDisableProviderForUserXAmzTargetEnum;
}
export declare class AdminDisableProviderForUserRequest extends SpeakeasyBase {
    headers: AdminDisableProviderForUserHeaders;
    request: shared.AdminDisableProviderForUserRequest;
}
export declare class AdminDisableProviderForUserResponse extends SpeakeasyBase {
    adminDisableProviderForUserResponse?: Map<string, any>;
    aliasExistsException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
