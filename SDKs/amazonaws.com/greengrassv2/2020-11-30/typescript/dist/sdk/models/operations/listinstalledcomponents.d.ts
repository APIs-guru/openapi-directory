import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInstalledComponentsPathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class ListInstalledComponentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListInstalledComponentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInstalledComponentsRequest extends SpeakeasyBase {
    pathParams: ListInstalledComponentsPathParams;
    queryParams: ListInstalledComponentsQueryParams;
    headers: ListInstalledComponentsHeaders;
}
export declare class ListInstalledComponentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listInstalledComponentsResponse?: shared.ListInstalledComponentsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
