import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SetIdentityPoolRolesXAmzTargetEnum {
    AwsCognitoIdentityServiceSetIdentityPoolRoles = "AWSCognitoIdentityService.SetIdentityPoolRoles"
}
export declare class SetIdentityPoolRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetIdentityPoolRolesXAmzTargetEnum;
}
export declare class SetIdentityPoolRolesRequest extends SpeakeasyBase {
    headers: SetIdentityPoolRolesHeaders;
    request: shared.SetIdentityPoolRolesInput;
}
export declare class SetIdentityPoolRolesResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
