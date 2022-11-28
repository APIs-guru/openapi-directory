import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateListener = "GlobalAccelerator_V20180706.CreateListener"
}
export declare class CreateListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateListenerXAmzTargetEnum;
}
export declare class CreateListenerRequest extends SpeakeasyBase {
    headers: CreateListenerHeaders;
    request: shared.CreateListenerRequest;
}
export declare class CreateListenerResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    createListenerResponse?: shared.CreateListenerResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidPortRangeException?: any;
    limitExceededException?: any;
    statusCode: number;
}
