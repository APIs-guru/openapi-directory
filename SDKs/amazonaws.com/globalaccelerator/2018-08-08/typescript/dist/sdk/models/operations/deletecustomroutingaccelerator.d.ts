import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteCustomRoutingAccelerator = "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator"
}
export declare class DeleteCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class DeleteCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    headers: DeleteCustomRoutingAcceleratorHeaders;
    request: shared.DeleteCustomRoutingAcceleratorRequest;
}
export declare class DeleteCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    acceleratorNotDisabledException?: any;
    acceleratorNotFoundException?: any;
    associatedListenerFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
