import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteAccelerator = "GlobalAccelerator_V20180706.DeleteAccelerator"
}
export declare class DeleteAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAcceleratorXAmzTargetEnum;
}
export declare class DeleteAcceleratorRequest extends SpeakeasyBase {
    headers: DeleteAcceleratorHeaders;
    request: shared.DeleteAcceleratorRequest;
}
export declare class DeleteAcceleratorResponse extends SpeakeasyBase {
    acceleratorNotDisabledException?: any;
    acceleratorNotFoundException?: any;
    associatedListenerFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
