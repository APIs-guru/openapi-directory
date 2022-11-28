import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteIdentityPoolXAmzTargetEnum {
    AwsCognitoIdentityServiceDeleteIdentityPool = "AWSCognitoIdentityService.DeleteIdentityPool"
}
export declare class DeleteIdentityPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIdentityPoolXAmzTargetEnum;
}
export declare class DeleteIdentityPoolRequest extends SpeakeasyBase {
    headers: DeleteIdentityPoolHeaders;
    request: shared.DeleteIdentityPoolInput;
}
export declare class DeleteIdentityPoolResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
