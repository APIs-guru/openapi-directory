import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImagesGetGlobalImagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GlobalImagesGetGlobalImageRequest extends SpeakeasyBase {
    pathParams: GlobalImagesGetGlobalImagePathParams;
}
export declare class GlobalImagesGetGlobalImageResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsGlobalImage?: shared.GlobalResourcesSharedModelsGlobalImage;
    statusCode: number;
}
