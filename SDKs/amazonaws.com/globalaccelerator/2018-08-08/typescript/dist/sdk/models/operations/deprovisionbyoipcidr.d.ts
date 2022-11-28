import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeprovisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706DeprovisionByoipCidr = "GlobalAccelerator_V20180706.DeprovisionByoipCidr"
}
export declare class DeprovisionByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprovisionByoipCidrXAmzTargetEnum;
}
export declare class DeprovisionByoipCidrRequest extends SpeakeasyBase {
    headers: DeprovisionByoipCidrHeaders;
    request: shared.DeprovisionByoipCidrRequest;
}
export declare class DeprovisionByoipCidrResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    byoipCidrNotFoundException?: any;
    contentType: string;
    deprovisionByoipCidrResponse?: shared.DeprovisionByoipCidrResponse;
    incorrectCidrStateException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
