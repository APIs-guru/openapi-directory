import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBackendJobsPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class ListBackendJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBackendJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBackendJobsRequestBody extends SpeakeasyBase {
    jobId?: string;
    maxResults?: number;
    nextToken?: string;
    operation?: string;
    status?: string;
}
export declare class ListBackendJobsRequest extends SpeakeasyBase {
    pathParams: ListBackendJobsPathParams;
    queryParams: ListBackendJobsQueryParams;
    headers: ListBackendJobsHeaders;
    request: ListBackendJobsRequestBody;
}
export declare class ListBackendJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    listBackendJobsResponse?: shared.ListBackendJobsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
