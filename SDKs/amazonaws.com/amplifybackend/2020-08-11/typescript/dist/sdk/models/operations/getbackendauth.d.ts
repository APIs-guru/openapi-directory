import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class GetBackendAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBackendAuthRequestBody extends SpeakeasyBase {
    resourceName: string;
}
export declare class GetBackendAuthRequest extends SpeakeasyBase {
    pathParams: GetBackendAuthPathParams;
    headers: GetBackendAuthHeaders;
    request: GetBackendAuthRequestBody;
}
export declare class GetBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getBackendAuthResponse?: shared.GetBackendAuthResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
