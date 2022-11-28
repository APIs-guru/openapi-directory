import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserPoolClientXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteUserPoolClient = "AWSCognitoIdentityProviderService.DeleteUserPoolClient"
}
export declare class DeleteUserPoolClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserPoolClientXAmzTargetEnum;
}
export declare class DeleteUserPoolClientRequest extends SpeakeasyBase {
    headers: DeleteUserPoolClientHeaders;
    request: shared.DeleteUserPoolClientRequest;
}
export declare class DeleteUserPoolClientResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
