import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImageCategoriesGetFilesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GlobalImageCategoriesGetFilesRequest extends SpeakeasyBase {
    queryParams: GlobalImageCategoriesGetFilesQueryParams;
}
export declare class GlobalImageCategoriesGetFilesResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory?: shared.ApiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
