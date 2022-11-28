import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup"
}
export declare class CreateCustomRoutingEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomRoutingEndpointGroupXAmzTargetEnum;
}
export declare class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    headers: CreateCustomRoutingEndpointGroupHeaders;
    request: shared.CreateCustomRoutingEndpointGroupRequest;
}
export declare class CreateCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    accessDeniedException?: any;
    contentType: string;
    createCustomRoutingEndpointGroupResponse?: shared.CreateCustomRoutingEndpointGroupResponse;
    endpointGroupAlreadyExistsException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidPortRangeException?: any;
    limitExceededException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
}
