import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClaimDevicesByClaimCodePathParams extends SpeakeasyBase {
    claimCode: string;
}
export declare class ClaimDevicesByClaimCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ClaimDevicesByClaimCodeRequest extends SpeakeasyBase {
    pathParams: ClaimDevicesByClaimCodePathParams;
    headers: ClaimDevicesByClaimCodeHeaders;
}
export declare class ClaimDevicesByClaimCodeResponse extends SpeakeasyBase {
    claimDevicesByClaimCodeResponse?: shared.ClaimDevicesByClaimCodeResponse;
    contentType: string;
    forbiddenException?: any;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
