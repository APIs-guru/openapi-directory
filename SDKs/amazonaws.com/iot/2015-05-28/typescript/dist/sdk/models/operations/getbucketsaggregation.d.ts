import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBucketsAggregationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The type of bucketed aggregation performed.
**/
export declare class GetBucketsAggregationRequestBodyBucketsAggregationType extends SpeakeasyBase {
    termsAggregation?: shared.TermsAggregation;
}
export declare class GetBucketsAggregationRequestBody extends SpeakeasyBase {
    aggregationField: string;
    bucketsAggregationType: GetBucketsAggregationRequestBodyBucketsAggregationType;
    indexName?: string;
    queryString: string;
    queryVersion?: string;
}
export declare class GetBucketsAggregationRequest extends SpeakeasyBase {
    headers: GetBucketsAggregationHeaders;
    request: GetBucketsAggregationRequestBody;
}
export declare class GetBucketsAggregationResponse extends SpeakeasyBase {
    contentType: string;
    getBucketsAggregationResponse?: shared.GetBucketsAggregationResponse;
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
