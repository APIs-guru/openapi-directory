import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingListener = "GlobalAccelerator_V20180706.CreateCustomRoutingListener"
}
export declare class CreateCustomRoutingListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomRoutingListenerXAmzTargetEnum;
}
export declare class CreateCustomRoutingListenerRequest extends SpeakeasyBase {
    headers: CreateCustomRoutingListenerHeaders;
    request: shared.CreateCustomRoutingListenerRequest;
}
export declare class CreateCustomRoutingListenerResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    createCustomRoutingListenerResponse?: shared.CreateCustomRoutingListenerResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidPortRangeException?: any;
    limitExceededException?: any;
    statusCode: number;
}
