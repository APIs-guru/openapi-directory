import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImageCategoriesGetFilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GlobalImageCategoriesGetFileRequest extends SpeakeasyBase {
    pathParams: GlobalImageCategoriesGetFilePathParams;
}
export declare class GlobalImageCategoriesGetFileResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsGlobalImageCategory?: shared.GlobalResourcesSharedModelsGlobalImageCategory;
    statusCode: number;
}
