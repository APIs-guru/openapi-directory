import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomRoutingEndpointGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCustomRoutingEndpointGroupsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingEndpointGroups = "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups"
}
export declare class ListCustomRoutingEndpointGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCustomRoutingEndpointGroupsXAmzTargetEnum;
}
export declare class ListCustomRoutingEndpointGroupsRequest extends SpeakeasyBase {
    queryParams: ListCustomRoutingEndpointGroupsQueryParams;
    headers: ListCustomRoutingEndpointGroupsHeaders;
    request: shared.ListCustomRoutingEndpointGroupsRequest;
}
export declare class ListCustomRoutingEndpointGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listCustomRoutingEndpointGroupsResponse?: shared.ListCustomRoutingEndpointGroupsResponse;
    listenerNotFoundException?: any;
    statusCode: number;
}
