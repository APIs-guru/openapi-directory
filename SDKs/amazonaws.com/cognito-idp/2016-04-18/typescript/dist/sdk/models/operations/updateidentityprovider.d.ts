import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateIdentityProviderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateIdentityProvider = "AWSCognitoIdentityProviderService.UpdateIdentityProvider"
}
export declare class UpdateIdentityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateIdentityProviderXAmzTargetEnum;
}
export declare class UpdateIdentityProviderRequest extends SpeakeasyBase {
    headers: UpdateIdentityProviderHeaders;
    request: shared.UpdateIdentityProviderRequest;
}
export declare class UpdateIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedIdentityProviderException?: any;
    updateIdentityProviderResponse?: shared.UpdateIdentityProviderResponse;
}
