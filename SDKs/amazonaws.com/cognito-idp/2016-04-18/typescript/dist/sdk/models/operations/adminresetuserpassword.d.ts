import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminResetUserPasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminResetUserPassword = "AWSCognitoIdentityProviderService.AdminResetUserPassword"
}
export declare class AdminResetUserPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminResetUserPasswordXAmzTargetEnum;
}
export declare class AdminResetUserPasswordRequest extends SpeakeasyBase {
    headers: AdminResetUserPasswordHeaders;
    request: shared.AdminResetUserPasswordRequest;
}
export declare class AdminResetUserPasswordResponse extends SpeakeasyBase {
    adminResetUserPasswordResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotFoundException?: any;
}
