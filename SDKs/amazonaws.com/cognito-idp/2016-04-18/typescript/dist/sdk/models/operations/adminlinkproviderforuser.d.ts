import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminLinkProviderForUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminLinkProviderForUser = "AWSCognitoIdentityProviderService.AdminLinkProviderForUser"
}
export declare class AdminLinkProviderForUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminLinkProviderForUserXAmzTargetEnum;
}
export declare class AdminLinkProviderForUserRequest extends SpeakeasyBase {
    headers: AdminLinkProviderForUserHeaders;
    request: shared.AdminLinkProviderForUserRequest;
}
export declare class AdminLinkProviderForUserResponse extends SpeakeasyBase {
    adminLinkProviderForUserResponse?: Map<string, any>;
    aliasExistsException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
