import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomMetricsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListCustomMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCustomMetricsRequest extends SpeakeasyBase {
    queryParams: ListCustomMetricsQueryParams;
    headers: ListCustomMetricsHeaders;
}
export declare class ListCustomMetricsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listCustomMetricsResponse?: shared.ListCustomMetricsResponse;
    statusCode: number;
    throttlingException?: any;
}
