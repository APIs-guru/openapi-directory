import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAnomaliesForInsightPathParams extends SpeakeasyBase {
    insightId: string;
}
export declare class ListAnomaliesForInsightQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAnomaliesForInsightHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  A time range used to specify when the behavior of an insight or anomaly started.
**/
export declare class ListAnomaliesForInsightRequestBodyStartTimeRange extends SpeakeasyBase {
    fromTime?: Date;
    toTime?: Date;
}
export declare class ListAnomaliesForInsightRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    startTimeRange?: ListAnomaliesForInsightRequestBodyStartTimeRange;
}
export declare class ListAnomaliesForInsightRequest extends SpeakeasyBase {
    pathParams: ListAnomaliesForInsightPathParams;
    queryParams: ListAnomaliesForInsightQueryParams;
    headers: ListAnomaliesForInsightHeaders;
    request: ListAnomaliesForInsightRequestBody;
}
export declare class ListAnomaliesForInsightResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnomaliesForInsightResponse?: shared.ListAnomaliesForInsightResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
