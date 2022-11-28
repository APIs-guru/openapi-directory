import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteEndpointGroup = "GlobalAccelerator_V20180706.DeleteEndpointGroup"
}
export declare class DeleteEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointGroupXAmzTargetEnum;
}
export declare class DeleteEndpointGroupRequest extends SpeakeasyBase {
    headers: DeleteEndpointGroupHeaders;
    request: shared.DeleteEndpointGroupRequest;
}
export declare class DeleteEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
