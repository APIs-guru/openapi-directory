import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBackendAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
    authResources?: shared.AuthResourcesEnum;
    identityPoolConfigs?: shared.CreateBackendAuthIdentityPoolConfig;
    service?: shared.ServiceEnum;
    userPoolConfigs?: shared.CreateBackendAuthUserPoolConfig;
}
export declare class CreateBackendAuthRequestBody extends SpeakeasyBase {
    backendEnvironmentName: string;
    resourceConfig: CreateBackendAuthRequestBodyResourceConfig;
    resourceName: string;
}
export declare class CreateBackendAuthRequest extends SpeakeasyBase {
    pathParams: CreateBackendAuthPathParams;
    headers: CreateBackendAuthHeaders;
    request: CreateBackendAuthRequestBody;
}
export declare class CreateBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendAuthResponse?: shared.CreateBackendAuthResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
