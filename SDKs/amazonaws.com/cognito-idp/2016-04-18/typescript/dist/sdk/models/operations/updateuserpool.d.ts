import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserPoolXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserPool = "AWSCognitoIdentityProviderService.UpdateUserPool"
}
export declare class UpdateUserPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserPoolXAmzTargetEnum;
}
export declare class UpdateUserPoolRequest extends SpeakeasyBase {
    headers: UpdateUserPoolHeaders;
    request: shared.UpdateUserPoolRequest;
}
export declare class UpdateUserPoolResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateUserPoolResponse?: Map<string, any>;
    userImportInProgressException?: any;
    userPoolTaggingException?: any;
}
