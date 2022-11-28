import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateEndpointGroup = "GlobalAccelerator_V20180706.CreateEndpointGroup"
}
export declare class CreateEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointGroupXAmzTargetEnum;
}
export declare class CreateEndpointGroupRequest extends SpeakeasyBase {
    headers: CreateEndpointGroupHeaders;
    request: shared.CreateEndpointGroupRequest;
}
export declare class CreateEndpointGroupResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    accessDeniedException?: any;
    contentType: string;
    createEndpointGroupResponse?: shared.CreateEndpointGroupResponse;
    endpointGroupAlreadyExistsException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
}
