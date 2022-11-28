import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateIdentityPoolXAmzTargetEnum {
    AwsCognitoIdentityServiceUpdateIdentityPool = "AWSCognitoIdentityService.UpdateIdentityPool"
}
export declare class UpdateIdentityPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateIdentityPoolXAmzTargetEnum;
}
export declare class UpdateIdentityPoolRequest extends SpeakeasyBase {
    headers: UpdateIdentityPoolHeaders;
    request: shared.IdentityPool;
}
export declare class UpdateIdentityPoolResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    identityPool?: shared.IdentityPool;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
