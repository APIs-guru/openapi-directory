import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendJobPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
    jobId: string;
}
export declare class GetBackendJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBackendJobRequest extends SpeakeasyBase {
    pathParams: GetBackendJobPathParams;
    headers: GetBackendJobHeaders;
}
export declare class GetBackendJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getBackendJobResponse?: shared.GetBackendJobResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
