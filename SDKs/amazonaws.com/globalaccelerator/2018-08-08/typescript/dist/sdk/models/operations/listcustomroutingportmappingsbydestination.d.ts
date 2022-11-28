import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomRoutingPortMappingsByDestinationQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination"
}
export declare class ListCustomRoutingPortMappingsByDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;
}
export declare class ListCustomRoutingPortMappingsByDestinationRequest extends SpeakeasyBase {
    queryParams: ListCustomRoutingPortMappingsByDestinationQueryParams;
    headers: ListCustomRoutingPortMappingsByDestinationHeaders;
    request: shared.ListCustomRoutingPortMappingsByDestinationRequest;
}
export declare class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
    contentType: string;
    endpointNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listCustomRoutingPortMappingsByDestinationResponse?: shared.ListCustomRoutingPortMappingsByDestinationResponse;
    statusCode: number;
}
