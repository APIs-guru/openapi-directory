import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAccelerator = "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator"
}
export declare class UpdateCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class UpdateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    headers: UpdateCustomRoutingAcceleratorHeaders;
    request: shared.UpdateCustomRoutingAcceleratorRequest;
}
export declare class UpdateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
    updateCustomRoutingAcceleratorResponse?: shared.UpdateCustomRoutingAcceleratorResponse;
}
