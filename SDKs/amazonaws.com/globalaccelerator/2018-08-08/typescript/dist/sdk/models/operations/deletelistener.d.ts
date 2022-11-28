import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteListener = "GlobalAccelerator_V20180706.DeleteListener"
}
export declare class DeleteListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteListenerXAmzTargetEnum;
}
export declare class DeleteListenerRequest extends SpeakeasyBase {
    headers: DeleteListenerHeaders;
    request: shared.DeleteListenerRequest;
}
export declare class DeleteListenerResponse extends SpeakeasyBase {
    associatedEndpointGroupFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
}
