import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes"
}
export declare class UpdateAcceleratorAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAcceleratorAttributesXAmzTargetEnum;
}
export declare class UpdateAcceleratorAttributesRequest extends SpeakeasyBase {
    headers: UpdateAcceleratorAttributesHeaders;
    request: shared.UpdateAcceleratorAttributesRequest;
}
export declare class UpdateAcceleratorAttributesResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
    updateAcceleratorAttributesResponse?: shared.UpdateAcceleratorAttributesResponse;
}
