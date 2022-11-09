import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetIdentityPoolRolesXAmzTargetEnum {
    AwsCognitoIdentityServiceGetIdentityPoolRoles = "AWSCognitoIdentityService.GetIdentityPoolRoles"
}
export declare class GetIdentityPoolRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIdentityPoolRolesXAmzTargetEnum;
}
export declare class GetIdentityPoolRolesRequest extends SpeakeasyBase {
    headers: GetIdentityPoolRolesHeaders;
    request: shared.GetIdentityPoolRolesInput;
}
export declare class GetIdentityPoolRolesResponse extends SpeakeasyBase {
    contentType: string;
    getIdentityPoolRolesResponse?: shared.GetIdentityPoolRolesResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
