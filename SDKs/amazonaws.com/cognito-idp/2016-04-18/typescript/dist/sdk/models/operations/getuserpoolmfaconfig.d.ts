import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserPoolMfaConfigXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetUserPoolMfaConfig = "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig"
}
export declare class GetUserPoolMfaConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserPoolMfaConfigXAmzTargetEnum;
}
export declare class GetUserPoolMfaConfigRequest extends SpeakeasyBase {
    headers: GetUserPoolMfaConfigHeaders;
    request: shared.GetUserPoolMfaConfigRequest;
}
export declare class GetUserPoolMfaConfigResponse extends SpeakeasyBase {
    contentType: string;
    getUserPoolMfaConfigResponse?: shared.GetUserPoolMfaConfigResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
