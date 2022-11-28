import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdvertiseByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706AdvertiseByoipCidr = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"
}
export declare class AdvertiseByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdvertiseByoipCidrXAmzTargetEnum;
}
export declare class AdvertiseByoipCidrRequest extends SpeakeasyBase {
    headers: AdvertiseByoipCidrHeaders;
    request: shared.AdvertiseByoipCidrRequest;
}
export declare class AdvertiseByoipCidrResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    advertiseByoipCidrResponse?: shared.AdvertiseByoipCidrResponse;
    byoipCidrNotFoundException?: any;
    contentType: string;
    incorrectCidrStateException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
