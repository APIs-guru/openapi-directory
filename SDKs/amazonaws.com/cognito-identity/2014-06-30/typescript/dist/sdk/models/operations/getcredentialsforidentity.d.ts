import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCredentialsForIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceGetCredentialsForIdentity = "AWSCognitoIdentityService.GetCredentialsForIdentity"
}
export declare class GetCredentialsForIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCredentialsForIdentityXAmzTargetEnum;
}
export declare class GetCredentialsForIdentityRequest extends SpeakeasyBase {
    headers: GetCredentialsForIdentityHeaders;
    request: shared.GetCredentialsForIdentityInput;
}
export declare class GetCredentialsForIdentityResponse extends SpeakeasyBase {
    contentType: string;
    externalServiceException?: any;
    getCredentialsForIdentityResponse?: shared.GetCredentialsForIdentityResponse;
    internalErrorException?: any;
    invalidIdentityPoolConfigurationException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
