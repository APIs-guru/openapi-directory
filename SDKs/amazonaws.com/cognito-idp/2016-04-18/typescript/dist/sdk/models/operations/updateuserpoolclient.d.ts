import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserPoolClientXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserPoolClient = "AWSCognitoIdentityProviderService.UpdateUserPoolClient"
}
export declare class UpdateUserPoolClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserPoolClientXAmzTargetEnum;
}
export declare class UpdateUserPoolClientRequest extends SpeakeasyBase {
    headers: UpdateUserPoolClientHeaders;
    request: shared.UpdateUserPoolClientRequest;
}
export declare class UpdateUserPoolClientResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidOAuthFlowException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    scopeDoesNotExistException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateUserPoolClientResponse?: shared.UpdateUserPoolClientResponse;
}
