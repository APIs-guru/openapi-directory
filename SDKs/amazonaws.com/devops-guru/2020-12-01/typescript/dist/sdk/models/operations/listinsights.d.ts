import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInsightsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListInsightsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  A filter used by <code>ListInsights</code> to specify which insights to return.
**/
export declare class ListInsightsRequestBodyStatusFilter extends SpeakeasyBase {
    any?: shared.ListInsightsAnyStatusFilter;
    closed?: shared.ListInsightsClosedStatusFilter;
    ongoing?: shared.ListInsightsOngoingStatusFilter;
}
export declare class ListInsightsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    statusFilter: ListInsightsRequestBodyStatusFilter;
}
export declare class ListInsightsRequest extends SpeakeasyBase {
    queryParams: ListInsightsQueryParams;
    headers: ListInsightsHeaders;
    request: ListInsightsRequestBody;
}
export declare class ListInsightsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listInsightsResponse?: shared.ListInsightsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
