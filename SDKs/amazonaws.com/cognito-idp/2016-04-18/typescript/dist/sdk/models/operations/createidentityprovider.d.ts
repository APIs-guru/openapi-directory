import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateIdentityProviderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateIdentityProvider = "AWSCognitoIdentityProviderService.CreateIdentityProvider"
}
export declare class CreateIdentityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIdentityProviderXAmzTargetEnum;
}
export declare class CreateIdentityProviderRequest extends SpeakeasyBase {
    headers: CreateIdentityProviderHeaders;
    request: shared.CreateIdentityProviderRequest;
}
export declare class CreateIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    createIdentityProviderResponse?: shared.CreateIdentityProviderResponse;
    duplicateProviderException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
