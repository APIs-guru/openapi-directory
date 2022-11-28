import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCardinalityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCardinalityRequestBody extends SpeakeasyBase {
    aggregationField?: string;
    indexName?: string;
    queryString: string;
    queryVersion?: string;
}
export declare class GetCardinalityRequest extends SpeakeasyBase {
    headers: GetCardinalityHeaders;
    request: GetCardinalityRequestBody;
}
export declare class GetCardinalityResponse extends SpeakeasyBase {
    contentType: string;
    getCardinalityResponse?: shared.GetCardinalityResponse;
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
