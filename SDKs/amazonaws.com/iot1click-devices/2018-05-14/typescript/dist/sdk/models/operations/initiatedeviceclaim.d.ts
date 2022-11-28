import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateDeviceClaimPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class InitiateDeviceClaimHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InitiateDeviceClaimRequest extends SpeakeasyBase {
    pathParams: InitiateDeviceClaimPathParams;
    headers: InitiateDeviceClaimHeaders;
}
export declare class InitiateDeviceClaimResponse extends SpeakeasyBase {
    contentType: string;
    initiateDeviceClaimResponse?: shared.InitiateDeviceClaimResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
