import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStatisticsRequestBody extends SpeakeasyBase {
    aggregationField?: string;
    indexName?: string;
    queryString: string;
    queryVersion?: string;
}
export declare class GetStatisticsRequest extends SpeakeasyBase {
    headers: GetStatisticsHeaders;
    request: GetStatisticsRequestBody;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    getStatisticsResponse?: shared.GetStatisticsResponse;
    indexNotReadyException?: any;
    internalFailureException?: any;
    invalidAggregationException?: any;
    invalidQueryException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
