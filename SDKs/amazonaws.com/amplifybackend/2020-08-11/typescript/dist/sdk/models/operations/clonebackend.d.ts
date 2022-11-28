import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloneBackendPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class CloneBackendHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CloneBackendRequestBody extends SpeakeasyBase {
    targetEnvironmentName: string;
}
export declare class CloneBackendRequest extends SpeakeasyBase {
    pathParams: CloneBackendPathParams;
    headers: CloneBackendHeaders;
    request: CloneBackendRequestBody;
}
export declare class CloneBackendResponse extends SpeakeasyBase {
    badRequestException?: any;
    cloneBackendResponse?: shared.CloneBackendResponse;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
