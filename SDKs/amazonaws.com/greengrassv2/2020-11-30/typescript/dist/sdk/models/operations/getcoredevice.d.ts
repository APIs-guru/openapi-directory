import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCoreDevicePathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class GetCoreDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCoreDeviceRequest extends SpeakeasyBase {
    pathParams: GetCoreDevicePathParams;
    headers: GetCoreDeviceHeaders;
}
export declare class GetCoreDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getCoreDeviceResponse?: shared.GetCoreDeviceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
