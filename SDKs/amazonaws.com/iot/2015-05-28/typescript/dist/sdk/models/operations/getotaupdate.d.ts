import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOtaUpdatePathParams extends SpeakeasyBase {
    otaUpdateId: string;
}
export declare class GetOtaUpdateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOtaUpdateRequest extends SpeakeasyBase {
    pathParams: GetOtaUpdatePathParams;
    headers: GetOtaUpdateHeaders;
}
export declare class GetOtaUpdateResponse extends SpeakeasyBase {
    contentType: string;
    getOtaUpdateResponse?: shared.GetOtaUpdateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
