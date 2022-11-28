import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminDeleteUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminDeleteUser = "AWSCognitoIdentityProviderService.AdminDeleteUser"
}
export declare class AdminDeleteUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDeleteUserXAmzTargetEnum;
}
export declare class AdminDeleteUserRequest extends SpeakeasyBase {
    headers: AdminDeleteUserHeaders;
    request: shared.AdminDeleteUserRequest;
}
export declare class AdminDeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
