import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateEndpointGroup = "GlobalAccelerator_V20180706.UpdateEndpointGroup"
}
export declare class UpdateEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointGroupXAmzTargetEnum;
}
export declare class UpdateEndpointGroupRequest extends SpeakeasyBase {
    headers: UpdateEndpointGroupHeaders;
    request: shared.UpdateEndpointGroupRequest;
}
export declare class UpdateEndpointGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    statusCode: number;
    updateEndpointGroupResponse?: shared.UpdateEndpointGroupResponse;
}
