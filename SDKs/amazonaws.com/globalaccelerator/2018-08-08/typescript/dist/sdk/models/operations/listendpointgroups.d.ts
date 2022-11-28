import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEndpointGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEndpointGroupsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListEndpointGroups = "GlobalAccelerator_V20180706.ListEndpointGroups"
}
export declare class ListEndpointGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEndpointGroupsXAmzTargetEnum;
}
export declare class ListEndpointGroupsRequest extends SpeakeasyBase {
    queryParams: ListEndpointGroupsQueryParams;
    headers: ListEndpointGroupsHeaders;
    request: shared.ListEndpointGroupsRequest;
}
export declare class ListEndpointGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listEndpointGroupsResponse?: shared.ListEndpointGroupsResponse;
    listenerNotFoundException?: any;
    statusCode: number;
}
