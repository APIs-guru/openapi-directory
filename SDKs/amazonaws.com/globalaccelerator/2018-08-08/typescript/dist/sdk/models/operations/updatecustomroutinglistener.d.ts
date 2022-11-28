import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingListener = "GlobalAccelerator_V20180706.UpdateCustomRoutingListener"
}
export declare class UpdateCustomRoutingListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomRoutingListenerXAmzTargetEnum;
}
export declare class UpdateCustomRoutingListenerRequest extends SpeakeasyBase {
    headers: UpdateCustomRoutingListenerHeaders;
    request: shared.UpdateCustomRoutingListenerRequest;
}
export declare class UpdateCustomRoutingListenerResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidPortRangeException?: any;
    limitExceededException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
    updateCustomRoutingListenerResponse?: shared.UpdateCustomRoutingListenerResponse;
}
