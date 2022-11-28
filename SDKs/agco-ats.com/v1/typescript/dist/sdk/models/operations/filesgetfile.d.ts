import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesGetFilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesGetFileRequest extends SpeakeasyBase {
    pathParams: FilesGetFilePathParams;
}
export declare class FilesGetFileResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsFileDownload?: shared.GlobalResourcesSharedModelsFileDownload;
    statusCode: number;
}
