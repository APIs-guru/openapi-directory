import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPercentilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPercentilesRequestBody extends SpeakeasyBase {
    aggregationField?: string;
    indexName?: string;
    percents?: number[];
    queryString: string;
    queryVersion?: string;
}
export declare class GetPercentilesRequest extends SpeakeasyBase {
    headers: GetPercentilesHeaders;
    request: GetPercentilesRequestBody;
}
export declare class GetPercentilesResponse extends SpeakeasyBase {
    contentType: string;
    getPercentilesResponse?: shared.GetPercentilesResponse;
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
