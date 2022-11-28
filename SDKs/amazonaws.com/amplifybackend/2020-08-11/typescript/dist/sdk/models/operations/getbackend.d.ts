import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetBackendHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBackendRequestBody extends SpeakeasyBase {
    backendEnvironmentName?: string;
}
export declare class GetBackendRequest extends SpeakeasyBase {
    pathParams: GetBackendPathParams;
    headers: GetBackendHeaders;
    request: GetBackendRequestBody;
}
export declare class GetBackendResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getBackendResponse?: shared.GetBackendResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
