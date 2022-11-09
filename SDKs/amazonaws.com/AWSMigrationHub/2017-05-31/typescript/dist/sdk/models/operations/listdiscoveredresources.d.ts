import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDiscoveredResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDiscoveredResourcesXAmzTargetEnum {
    AwsMigrationHubListDiscoveredResources = "AWSMigrationHub.ListDiscoveredResources"
}
export declare class ListDiscoveredResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDiscoveredResourcesXAmzTargetEnum;
}
export declare class ListDiscoveredResourcesRequest extends SpeakeasyBase {
    queryParams: ListDiscoveredResourcesQueryParams;
    headers: ListDiscoveredResourcesHeaders;
    request: shared.ListDiscoveredResourcesRequest;
}
export declare class ListDiscoveredResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    listDiscoveredResourcesResult?: shared.ListDiscoveredResourcesResult;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
