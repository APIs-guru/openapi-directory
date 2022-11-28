import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBackendJobPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
    jobId: string;
}
export declare class UpdateBackendJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateBackendJobRequestBody extends SpeakeasyBase {
    operation?: string;
    status?: string;
}
export declare class UpdateBackendJobRequest extends SpeakeasyBase {
    pathParams: UpdateBackendJobPathParams;
    headers: UpdateBackendJobHeaders;
    request: UpdateBackendJobRequestBody;
}
export declare class UpdateBackendJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBackendJobResponse?: shared.UpdateBackendJobResponse;
}
