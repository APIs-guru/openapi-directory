import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDataflowEndpointGroupsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDataflowEndpointGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDataflowEndpointGroupsRequest extends SpeakeasyBase {
    queryParams: ListDataflowEndpointGroupsQueryParams;
    headers: ListDataflowEndpointGroupsHeaders;
}
export declare class ListDataflowEndpointGroupsResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    listDataflowEndpointGroupsResponse?: shared.ListDataflowEndpointGroupsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
