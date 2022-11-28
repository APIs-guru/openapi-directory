import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class ImportBackendAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportBackendAuthRequestBody extends SpeakeasyBase {
    identityPoolId?: string;
    nativeClientId: string;
    userPoolId: string;
    webClientId: string;
}
export declare class ImportBackendAuthRequest extends SpeakeasyBase {
    pathParams: ImportBackendAuthPathParams;
    headers: ImportBackendAuthHeaders;
    request: ImportBackendAuthRequestBody;
}
export declare class ImportBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    importBackendAuthResponse?: shared.ImportBackendAuthResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
