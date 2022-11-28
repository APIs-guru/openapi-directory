import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FinalizeDeviceClaimPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class FinalizeDeviceClaimHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class FinalizeDeviceClaimRequestBody extends SpeakeasyBase {
    tags?: Map<string, string>;
}
export declare class FinalizeDeviceClaimRequest extends SpeakeasyBase {
    pathParams: FinalizeDeviceClaimPathParams;
    headers: FinalizeDeviceClaimHeaders;
    request: FinalizeDeviceClaimRequestBody;
}
export declare class FinalizeDeviceClaimResponse extends SpeakeasyBase {
    contentType: string;
    finalizeDeviceClaimResponse?: shared.FinalizeDeviceClaimResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    preconditionFailedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
