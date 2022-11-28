import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProtectionStatusXAmzTargetEnum {
    Awsfms20180101GetProtectionStatus = "AWSFMS_20180101.GetProtectionStatus"
}
export declare class GetProtectionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProtectionStatusXAmzTargetEnum;
}
export declare class GetProtectionStatusRequest extends SpeakeasyBase {
    headers: GetProtectionStatusHeaders;
    request: shared.GetProtectionStatusRequest;
}
export declare class GetProtectionStatusResponse extends SpeakeasyBase {
    contentType: string;
    getProtectionStatusResponse?: shared.GetProtectionStatusResponse;
    internalErrorException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
