import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePendingAggregationRequestsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribePendingAggregationRequestsXAmzTargetEnum {
    StarlingDoveServiceDescribePendingAggregationRequests = "StarlingDoveService.DescribePendingAggregationRequests"
}
export declare class DescribePendingAggregationRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePendingAggregationRequestsXAmzTargetEnum;
}
export declare class DescribePendingAggregationRequestsRequest extends SpeakeasyBase {
    queryParams: DescribePendingAggregationRequestsQueryParams;
    headers: DescribePendingAggregationRequestsHeaders;
    request: shared.DescribePendingAggregationRequestsRequest;
}
export declare class DescribePendingAggregationRequestsResponse extends SpeakeasyBase {
    contentType: string;
    describePendingAggregationRequestsResponse?: shared.DescribePendingAggregationRequestsResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
