import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIdentityPoolConfigurationPathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class GetIdentityPoolConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIdentityPoolConfigurationRequest extends SpeakeasyBase {
    pathParams: GetIdentityPoolConfigurationPathParams;
    headers: GetIdentityPoolConfigurationHeaders;
}
export declare class GetIdentityPoolConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getIdentityPoolConfigurationResponse?: shared.GetIdentityPoolConfigurationResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
