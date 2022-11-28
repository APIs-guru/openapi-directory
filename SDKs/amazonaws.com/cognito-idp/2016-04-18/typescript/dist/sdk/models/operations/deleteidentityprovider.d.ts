import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteIdentityProviderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteIdentityProvider = "AWSCognitoIdentityProviderService.DeleteIdentityProvider"
}
export declare class DeleteIdentityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIdentityProviderXAmzTargetEnum;
}
export declare class DeleteIdentityProviderRequest extends SpeakeasyBase {
    headers: DeleteIdentityProviderHeaders;
    request: shared.DeleteIdentityProviderRequest;
}
export declare class DeleteIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedIdentityProviderException?: any;
}
