import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup"
}
export declare class DeleteCustomRoutingEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomRoutingEndpointGroupXAmzTargetEnum;
}
export declare class DeleteCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    headers: DeleteCustomRoutingEndpointGroupHeaders;
    request: shared.DeleteCustomRoutingEndpointGroupRequest;
}
export declare class DeleteCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
