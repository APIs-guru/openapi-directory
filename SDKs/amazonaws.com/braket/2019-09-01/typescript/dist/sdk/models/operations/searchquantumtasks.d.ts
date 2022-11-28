import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchQuantumTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class SearchQuantumTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchQuantumTasksRequestBody extends SpeakeasyBase {
    filters: shared.SearchQuantumTasksFilter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class SearchQuantumTasksRequest extends SpeakeasyBase {
    queryParams: SearchQuantumTasksQueryParams;
    headers: SearchQuantumTasksHeaders;
    request: SearchQuantumTasksRequestBody;
}
export declare class SearchQuantumTasksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    searchQuantumTasksResponse?: shared.SearchQuantumTasksResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
