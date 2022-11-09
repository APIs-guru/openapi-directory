import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
}
export declare class GetOpenIdTokenForDeveloperIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;
}
export declare class GetOpenIdTokenForDeveloperIdentityRequest extends SpeakeasyBase {
    headers: GetOpenIdTokenForDeveloperIdentityHeaders;
    request: shared.GetOpenIdTokenForDeveloperIdentityInput;
}
export declare class GetOpenIdTokenForDeveloperIdentityResponse extends SpeakeasyBase {
    contentType: string;
    developerUserAlreadyRegisteredException?: any;
    getOpenIdTokenForDeveloperIdentityResponse?: shared.GetOpenIdTokenForDeveloperIdentityResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
