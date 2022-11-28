import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminUpdateUserAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminUpdateUserAttributes = "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes"
}
export declare class AdminUpdateUserAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUpdateUserAttributesXAmzTargetEnum;
}
export declare class AdminUpdateUserAttributesRequest extends SpeakeasyBase {
    headers: AdminUpdateUserAttributesHeaders;
    request: shared.AdminUpdateUserAttributesRequest;
}
export declare class AdminUpdateUserAttributesResponse extends SpeakeasyBase {
    adminUpdateUserAttributesResponse?: Map<string, any>;
    aliasExistsException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotFoundException?: any;
}
