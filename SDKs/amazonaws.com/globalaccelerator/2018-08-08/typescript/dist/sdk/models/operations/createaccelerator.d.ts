import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateAccelerator = "GlobalAccelerator_V20180706.CreateAccelerator"
}
export declare class CreateAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAcceleratorXAmzTargetEnum;
}
export declare class CreateAcceleratorRequest extends SpeakeasyBase {
    headers: CreateAcceleratorHeaders;
    request: shared.CreateAcceleratorRequest;
}
export declare class CreateAcceleratorResponse extends SpeakeasyBase {
    contentType: string;
    createAcceleratorResponse?: shared.CreateAcceleratorResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    statusCode: number;
}
