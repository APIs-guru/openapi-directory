import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserPoolXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateUserPool = "AWSCognitoIdentityProviderService.CreateUserPool"
}
export declare class CreateUserPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserPoolXAmzTargetEnum;
}
export declare class CreateUserPoolRequest extends SpeakeasyBase {
    headers: CreateUserPoolHeaders;
    request: shared.CreateUserPoolRequest;
}
export declare class CreateUserPoolResponse extends SpeakeasyBase {
    contentType: string;
    createUserPoolResponse?: shared.CreateUserPoolResponse;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userPoolTaggingException?: any;
}
