import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAggregateDiscoveredResourceCountsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetAggregateDiscoveredResourceCountsXAmzTargetEnum {
    StarlingDoveServiceGetAggregateDiscoveredResourceCounts = "StarlingDoveService.GetAggregateDiscoveredResourceCounts"
}
export declare class GetAggregateDiscoveredResourceCountsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAggregateDiscoveredResourceCountsXAmzTargetEnum;
}
export declare class GetAggregateDiscoveredResourceCountsRequest extends SpeakeasyBase {
    queryParams: GetAggregateDiscoveredResourceCountsQueryParams;
    headers: GetAggregateDiscoveredResourceCountsHeaders;
    request: shared.GetAggregateDiscoveredResourceCountsRequest;
}
export declare class GetAggregateDiscoveredResourceCountsResponse extends SpeakeasyBase {
    contentType: string;
    getAggregateDiscoveredResourceCountsResponse?: shared.GetAggregateDiscoveredResourceCountsResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
