import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnclaimDevicePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class UnclaimDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UnclaimDeviceRequest extends SpeakeasyBase {
    pathParams: UnclaimDevicePathParams;
    headers: UnclaimDeviceHeaders;
}
export declare class UnclaimDeviceResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unclaimDeviceResponse?: shared.UnclaimDeviceResponse;
}
