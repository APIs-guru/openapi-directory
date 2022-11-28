import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAggregateDiscoveredResourcesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListAggregateDiscoveredResourcesXAmzTargetEnum {
    StarlingDoveServiceListAggregateDiscoveredResources = "StarlingDoveService.ListAggregateDiscoveredResources"
}
export declare class ListAggregateDiscoveredResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAggregateDiscoveredResourcesXAmzTargetEnum;
}
export declare class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
    queryParams: ListAggregateDiscoveredResourcesQueryParams;
    headers: ListAggregateDiscoveredResourcesHeaders;
    request: shared.ListAggregateDiscoveredResourcesRequest;
}
export declare class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
    contentType: string;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    listAggregateDiscoveredResourcesResponse?: shared.ListAggregateDiscoveredResourcesResponse;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
