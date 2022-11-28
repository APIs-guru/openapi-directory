import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCoreDevicePathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class DeleteCoreDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCoreDeviceRequest extends SpeakeasyBase {
    pathParams: DeleteCoreDevicePathParams;
    headers: DeleteCoreDeviceHeaders;
}
export declare class DeleteCoreDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
