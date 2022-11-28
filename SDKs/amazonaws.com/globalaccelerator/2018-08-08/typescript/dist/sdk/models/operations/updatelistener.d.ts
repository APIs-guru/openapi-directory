import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateListener = "GlobalAccelerator_V20180706.UpdateListener"
}
export declare class UpdateListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateListenerXAmzTargetEnum;
}
export declare class UpdateListenerRequest extends SpeakeasyBase {
    headers: UpdateListenerHeaders;
    request: shared.UpdateListenerRequest;
}
export declare class UpdateListenerResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidPortRangeException?: any;
    limitExceededException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
    updateListenerResponse?: shared.UpdateListenerResponse;
}
