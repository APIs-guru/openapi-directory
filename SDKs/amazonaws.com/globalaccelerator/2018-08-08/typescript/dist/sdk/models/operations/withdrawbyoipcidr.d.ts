import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum WithdrawByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706WithdrawByoipCidr = "GlobalAccelerator_V20180706.WithdrawByoipCidr"
}
export declare class WithdrawByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: WithdrawByoipCidrXAmzTargetEnum;
}
export declare class WithdrawByoipCidrRequest extends SpeakeasyBase {
    headers: WithdrawByoipCidrHeaders;
    request: shared.WithdrawByoipCidrRequest;
}
export declare class WithdrawByoipCidrResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    byoipCidrNotFoundException?: any;
    contentType: string;
    incorrectCidrStateException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
    withdrawByoipCidrResponse?: shared.WithdrawByoipCidrResponse;
}
