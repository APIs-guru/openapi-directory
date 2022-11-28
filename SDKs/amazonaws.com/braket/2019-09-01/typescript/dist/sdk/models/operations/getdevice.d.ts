import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicePathParams extends SpeakeasyBase {
    deviceArn: string;
}
export declare class GetDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeviceRequest extends SpeakeasyBase {
    pathParams: GetDevicePathParams;
    headers: GetDeviceHeaders;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deviceOfflineException?: any;
    deviceRetiredException?: any;
    getDeviceResponse?: shared.GetDeviceResponse;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
