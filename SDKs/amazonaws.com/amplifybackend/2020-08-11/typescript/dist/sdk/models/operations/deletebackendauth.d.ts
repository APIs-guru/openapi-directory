import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class DeleteBackendAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBackendAuthRequestBody extends SpeakeasyBase {
    resourceName: string;
}
export declare class DeleteBackendAuthRequest extends SpeakeasyBase {
    pathParams: DeleteBackendAuthPathParams;
    headers: DeleteBackendAuthHeaders;
    request: DeleteBackendAuthRequestBody;
}
export declare class DeleteBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBackendAuthResponse?: shared.DeleteBackendAuthResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
