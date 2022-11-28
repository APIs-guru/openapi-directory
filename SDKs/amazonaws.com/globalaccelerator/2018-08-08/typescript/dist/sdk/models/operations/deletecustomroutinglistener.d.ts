import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteCustomRoutingListener = "GlobalAccelerator_V20180706.DeleteCustomRoutingListener"
}
export declare class DeleteCustomRoutingListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomRoutingListenerXAmzTargetEnum;
}
export declare class DeleteCustomRoutingListenerRequest extends SpeakeasyBase {
    headers: DeleteCustomRoutingListenerHeaders;
    request: shared.DeleteCustomRoutingListenerRequest;
}
export declare class DeleteCustomRoutingListenerResponse extends SpeakeasyBase {
    associatedEndpointGroupFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
}
