import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetOpenIdTokenXAmzTargetEnum {
    AwsCognitoIdentityServiceGetOpenIdToken = "AWSCognitoIdentityService.GetOpenIdToken"
}
export declare class GetOpenIdTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpenIdTokenXAmzTargetEnum;
}
export declare class GetOpenIdTokenRequest extends SpeakeasyBase {
    headers: GetOpenIdTokenHeaders;
    request: shared.GetOpenIdTokenInput;
}
export declare class GetOpenIdTokenResponse extends SpeakeasyBase {
    contentType: string;
    externalServiceException?: any;
    getOpenIdTokenResponse?: shared.GetOpenIdTokenResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
