import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserPoolClientXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateUserPoolClient = "AWSCognitoIdentityProviderService.CreateUserPoolClient"
}
export declare class CreateUserPoolClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserPoolClientXAmzTargetEnum;
}
export declare class CreateUserPoolClientRequest extends SpeakeasyBase {
    headers: CreateUserPoolClientHeaders;
    request: shared.CreateUserPoolClientRequest;
}
export declare class CreateUserPoolClientResponse extends SpeakeasyBase {
    contentType: string;
    createUserPoolClientResponse?: shared.CreateUserPoolClientResponse;
    internalErrorException?: any;
    invalidOAuthFlowException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    scopeDoesNotExistException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
