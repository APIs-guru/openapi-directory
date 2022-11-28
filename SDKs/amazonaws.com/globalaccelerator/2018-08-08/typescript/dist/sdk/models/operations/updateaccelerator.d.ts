import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateAccelerator = "GlobalAccelerator_V20180706.UpdateAccelerator"
}
export declare class UpdateAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAcceleratorXAmzTargetEnum;
}
export declare class UpdateAcceleratorRequest extends SpeakeasyBase {
    headers: UpdateAcceleratorHeaders;
    request: shared.UpdateAcceleratorRequest;
}
export declare class UpdateAcceleratorResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
    updateAcceleratorResponse?: shared.UpdateAcceleratorResponse;
}
