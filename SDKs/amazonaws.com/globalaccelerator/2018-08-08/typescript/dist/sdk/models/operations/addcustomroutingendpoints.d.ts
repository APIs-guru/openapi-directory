import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddCustomRoutingEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706AddCustomRoutingEndpoints = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints"
}
export declare class AddCustomRoutingEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddCustomRoutingEndpointsXAmzTargetEnum;
}
export declare class AddCustomRoutingEndpointsRequest extends SpeakeasyBase {
    headers: AddCustomRoutingEndpointsHeaders;
    request: shared.AddCustomRoutingEndpointsRequest;
}
export declare class AddCustomRoutingEndpointsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    addCustomRoutingEndpointsResponse?: shared.AddCustomRoutingEndpointsResponse;
    conflictException?: any;
    contentType: string;
    endpointAlreadyExistsException?: any;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    statusCode: number;
}
