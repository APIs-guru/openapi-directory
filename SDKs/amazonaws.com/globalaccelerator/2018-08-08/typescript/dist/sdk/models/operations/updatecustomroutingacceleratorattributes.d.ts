import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"
}
export declare class UpdateCustomRoutingAcceleratorAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}
export declare class UpdateCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
    headers: UpdateCustomRoutingAcceleratorAttributesHeaders;
    request: shared.UpdateCustomRoutingAcceleratorAttributesRequest;
}
export declare class UpdateCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
    updateCustomRoutingAcceleratorAttributesResponse?: shared.UpdateCustomRoutingAcceleratorAttributesResponse;
}
