import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceMethodsPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class GetDeviceMethodsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeviceMethodsRequest extends SpeakeasyBase {
    pathParams: GetDeviceMethodsPathParams;
    headers: GetDeviceMethodsHeaders;
}
export declare class GetDeviceMethodsResponse extends SpeakeasyBase {
    contentType: string;
    getDeviceMethodsResponse?: shared.GetDeviceMethodsResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
