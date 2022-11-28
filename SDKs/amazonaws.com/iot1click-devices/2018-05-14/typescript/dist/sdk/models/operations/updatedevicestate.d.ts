import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceStatePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class UpdateDeviceStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDeviceStateRequestBody extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateDeviceStateRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceStatePathParams;
    headers: UpdateDeviceStateHeaders;
    request: UpdateDeviceStateRequestBody;
}
export declare class UpdateDeviceStateResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateDeviceStateResponse?: Map<string, any>;
}
