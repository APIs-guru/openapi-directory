import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateIdentityPoolXAmzTargetEnum {
    AwsCognitoIdentityServiceCreateIdentityPool = "AWSCognitoIdentityService.CreateIdentityPool"
}
export declare class CreateIdentityPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIdentityPoolXAmzTargetEnum;
}
export declare class CreateIdentityPoolRequest extends SpeakeasyBase {
    headers: CreateIdentityPoolHeaders;
    request: shared.CreateIdentityPoolInput;
}
export declare class CreateIdentityPoolResponse extends SpeakeasyBase {
    contentType: string;
    identityPool?: shared.IdentityPool;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
