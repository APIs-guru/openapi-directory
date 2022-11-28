import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImagesGetGlobalImageContentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GlobalImagesGetGlobalImageContentsQueryParams extends SpeakeasyBase {
    isFullImage?: boolean;
}
export declare class GlobalImagesGetGlobalImageContentsRequest extends SpeakeasyBase {
    pathParams: GlobalImagesGetGlobalImageContentsPathParams;
    queryParams: GlobalImagesGetGlobalImageContentsQueryParams;
}
export declare class GlobalImagesGetGlobalImageContentsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
