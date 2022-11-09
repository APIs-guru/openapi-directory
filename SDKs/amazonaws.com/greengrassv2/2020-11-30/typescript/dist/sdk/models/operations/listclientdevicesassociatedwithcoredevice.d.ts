import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListClientDevicesAssociatedWithCoreDevicePathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class ListClientDevicesAssociatedWithCoreDeviceQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListClientDevicesAssociatedWithCoreDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListClientDevicesAssociatedWithCoreDeviceRequest extends SpeakeasyBase {
    pathParams: ListClientDevicesAssociatedWithCoreDevicePathParams;
    queryParams: ListClientDevicesAssociatedWithCoreDeviceQueryParams;
    headers: ListClientDevicesAssociatedWithCoreDeviceHeaders;
}
export declare class ListClientDevicesAssociatedWithCoreDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listClientDevicesAssociatedWithCoreDeviceResponse?: shared.ListClientDevicesAssociatedWithCoreDeviceResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
