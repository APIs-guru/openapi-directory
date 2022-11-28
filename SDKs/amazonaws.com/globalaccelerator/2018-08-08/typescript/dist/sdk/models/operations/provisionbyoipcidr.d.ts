import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ProvisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706ProvisionByoipCidr = "GlobalAccelerator_V20180706.ProvisionByoipCidr"
}
export declare class ProvisionByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ProvisionByoipCidrXAmzTargetEnum;
}
export declare class ProvisionByoipCidrRequest extends SpeakeasyBase {
    headers: ProvisionByoipCidrHeaders;
    request: shared.ProvisionByoipCidrRequest;
}
export declare class ProvisionByoipCidrResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incorrectCidrStateException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    provisionByoipCidrResponse?: shared.ProvisionByoipCidrResponse;
    statusCode: number;
}
