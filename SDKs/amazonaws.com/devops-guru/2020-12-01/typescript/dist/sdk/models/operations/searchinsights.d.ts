import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchInsightsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class SearchInsightsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Specifies one or more severity values and one or more status values that are used to search for insights.
**/
export declare class SearchInsightsRequestBodyFilters extends SpeakeasyBase {
    resourceCollection?: shared.ResourceCollection;
    serviceCollection?: shared.ServiceCollection;
    severities?: shared.InsightSeverityEnum[];
    statuses?: shared.InsightStatusEnum[];
}
/**
 *  A time range used to specify when the behavior of an insight or anomaly started.
**/
export declare class SearchInsightsRequestBodyStartTimeRange extends SpeakeasyBase {
    fromTime?: Date;
    toTime?: Date;
}
export declare enum SearchInsightsRequestBodyTypeEnum {
    Reactive = "REACTIVE",
    Proactive = "PROACTIVE"
}
export declare class SearchInsightsRequestBody extends SpeakeasyBase {
    filters?: SearchInsightsRequestBodyFilters;
    maxResults?: number;
    nextToken?: string;
    startTimeRange: SearchInsightsRequestBodyStartTimeRange;
    type: SearchInsightsRequestBodyTypeEnum;
}
export declare class SearchInsightsRequest extends SpeakeasyBase {
    queryParams: SearchInsightsQueryParams;
    headers: SearchInsightsHeaders;
    request: SearchInsightsRequestBody;
}
export declare class SearchInsightsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    searchInsightsResponse?: shared.SearchInsightsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
