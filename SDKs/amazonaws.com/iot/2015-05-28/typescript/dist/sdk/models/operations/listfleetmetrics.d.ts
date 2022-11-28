import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFleetMetricsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFleetMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFleetMetricsRequest extends SpeakeasyBase {
    queryParams: ListFleetMetricsQueryParams;
    headers: ListFleetMetricsHeaders;
}
export declare class ListFleetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listFleetMetricsResponse?: shared.ListFleetMetricsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
