import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomRoutingPortMappingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCustomRoutingPortMappingsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappings = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings"
}
export declare class ListCustomRoutingPortMappingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCustomRoutingPortMappingsXAmzTargetEnum;
}
export declare class ListCustomRoutingPortMappingsRequest extends SpeakeasyBase {
    queryParams: ListCustomRoutingPortMappingsQueryParams;
    headers: ListCustomRoutingPortMappingsHeaders;
    request: shared.ListCustomRoutingPortMappingsRequest;
}
export declare class ListCustomRoutingPortMappingsResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listCustomRoutingPortMappingsResponse?: shared.ListCustomRoutingPortMappingsResponse;
    statusCode: number;
}
