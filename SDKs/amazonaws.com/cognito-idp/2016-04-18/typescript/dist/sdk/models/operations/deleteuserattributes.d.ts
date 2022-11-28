import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteUserAttributes = "AWSCognitoIdentityProviderService.DeleteUserAttributes"
}
export declare class DeleteUserAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserAttributesXAmzTargetEnum;
}
export declare class DeleteUserAttributesRequest extends SpeakeasyBase {
    headers: DeleteUserAttributesHeaders;
    request: shared.DeleteUserAttributesRequest;
}
export declare class DeleteUserAttributesResponse extends SpeakeasyBase {
    contentType: string;
    deleteUserAttributesResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
