import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiscoveredResourceCountsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetDiscoveredResourceCountsXAmzTargetEnum {
    StarlingDoveServiceGetDiscoveredResourceCounts = "StarlingDoveService.GetDiscoveredResourceCounts"
}
export declare class GetDiscoveredResourceCountsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiscoveredResourceCountsXAmzTargetEnum;
}
export declare class GetDiscoveredResourceCountsRequest extends SpeakeasyBase {
    queryParams: GetDiscoveredResourceCountsQueryParams;
    headers: GetDiscoveredResourceCountsHeaders;
    request: shared.GetDiscoveredResourceCountsRequest;
}
export declare class GetDiscoveredResourceCountsResponse extends SpeakeasyBase {
    contentType: string;
    getDiscoveredResourceCountsResponse?: shared.GetDiscoveredResourceCountsResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
