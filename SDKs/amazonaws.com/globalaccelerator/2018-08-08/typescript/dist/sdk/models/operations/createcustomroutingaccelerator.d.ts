import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingAccelerator = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator"
}
export declare class CreateCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class CreateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    headers: CreateCustomRoutingAcceleratorHeaders;
    request: shared.CreateCustomRoutingAcceleratorRequest;
}
export declare class CreateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createCustomRoutingAcceleratorResponse?: shared.CreateCustomRoutingAcceleratorResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    statusCode: number;
}
