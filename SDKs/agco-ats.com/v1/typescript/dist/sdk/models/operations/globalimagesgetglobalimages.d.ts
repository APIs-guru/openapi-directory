import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImagesGetGlobalImagesQueryParams extends SpeakeasyBase {
    categoryId?: string;
    includeDeleted?: boolean;
    limit?: number;
    offset?: number;
    publisher?: string;
    search?: string;
}
export declare class GlobalImagesGetGlobalImagesRequest extends SpeakeasyBase {
    queryParams: GlobalImagesGetGlobalImagesQueryParams;
}
export declare class GlobalImagesGetGlobalImagesResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsGlobalImage?: shared.ApiIPagedResponseGlobalResourcesSharedModelsGlobalImage;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
