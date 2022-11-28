import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RevokeTokenXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceRevokeToken = "AWSCognitoIdentityProviderService.RevokeToken"
}
export declare class RevokeTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeTokenXAmzTargetEnum;
}
export declare class RevokeTokenRequest extends SpeakeasyBase {
    headers: RevokeTokenHeaders;
    request: shared.RevokeTokenRequest;
}
export declare class RevokeTokenResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    revokeTokenResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    unsupportedOperationException?: any;
    unsupportedTokenTypeException?: any;
}
