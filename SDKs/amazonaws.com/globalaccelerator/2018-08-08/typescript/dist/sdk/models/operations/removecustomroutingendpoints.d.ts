import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveCustomRoutingEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706RemoveCustomRoutingEndpoints = "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints"
}
export declare class RemoveCustomRoutingEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveCustomRoutingEndpointsXAmzTargetEnum;
}
export declare class RemoveCustomRoutingEndpointsRequest extends SpeakeasyBase {
    headers: RemoveCustomRoutingEndpointsHeaders;
    request: shared.RemoveCustomRoutingEndpointsRequest;
}
export declare class RemoveCustomRoutingEndpointsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    endpointGroupNotFoundException?: any;
    endpointNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
