import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRealtimeContactAnalysisSegmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListRealtimeContactAnalysisSegmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRealtimeContactAnalysisSegmentsRequestBody extends SpeakeasyBase {
    contactId: string;
    instanceId: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRealtimeContactAnalysisSegmentsRequest extends SpeakeasyBase {
    queryParams: ListRealtimeContactAnalysisSegmentsQueryParams;
    headers: ListRealtimeContactAnalysisSegmentsHeaders;
    request: ListRealtimeContactAnalysisSegmentsRequestBody;
}
export declare class ListRealtimeContactAnalysisSegmentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listRealtimeContactAnalysisSegmentsResponse?: shared.ListRealtimeContactAnalysisSegmentsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
