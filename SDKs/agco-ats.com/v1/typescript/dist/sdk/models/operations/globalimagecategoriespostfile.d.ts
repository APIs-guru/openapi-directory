import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImageCategoriesPostFileRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsGlobalImageCategory?: shared.GlobalResourcesSharedModelsGlobalImageCategory;
    globalResourcesSharedModelsGlobalImageCategory1?: shared.GlobalResourcesSharedModelsGlobalImageCategory;
    globalResourcesSharedModelsGlobalImageCategory2?: shared.GlobalResourcesSharedModelsGlobalImageCategory;
    textXml: Uint8Array;
}
export declare class GlobalImageCategoriesPostFileRequest extends SpeakeasyBase {
    request: GlobalImageCategoriesPostFileRequests;
}
export declare class GlobalImageCategoriesPostFileResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalImageCategoriesPostFile200ApplicationJsonString?: string;
    globalImageCategoriesPostFile200ApplicationXmlString?: string;
    globalImageCategoriesPostFile200TextJsonString?: string;
    globalImageCategoriesPostFile200TextXmlString?: string;
    statusCode: number;
}
