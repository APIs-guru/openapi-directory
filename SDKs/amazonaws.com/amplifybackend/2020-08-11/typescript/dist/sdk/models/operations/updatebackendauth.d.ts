import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class UpdateBackendAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
    authResources?: shared.AuthResourcesEnum;
    identityPoolConfigs?: shared.UpdateBackendAuthIdentityPoolConfig;
    service?: shared.ServiceEnum;
    userPoolConfigs?: shared.UpdateBackendAuthUserPoolConfig;
}
export declare class UpdateBackendAuthRequestBody extends SpeakeasyBase {
    resourceConfig: UpdateBackendAuthRequestBodyResourceConfig;
    resourceName: string;
}
export declare class UpdateBackendAuthRequest extends SpeakeasyBase {
    pathParams: UpdateBackendAuthPathParams;
    headers: UpdateBackendAuthHeaders;
    request: UpdateBackendAuthRequestBody;
}
export declare class UpdateBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBackendAuthResponse?: shared.UpdateBackendAuthResponse;
}
