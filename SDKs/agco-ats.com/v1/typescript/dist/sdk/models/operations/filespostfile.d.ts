import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesPostFileRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsFileDownload?: shared.GlobalResourcesSharedModelsFileDownload;
    globalResourcesSharedModelsFileDownload1?: shared.GlobalResourcesSharedModelsFileDownload;
    globalResourcesSharedModelsFileDownload2?: shared.GlobalResourcesSharedModelsFileDownload;
    textXml: Uint8Array;
}
export declare class FilesPostFileRequest extends SpeakeasyBase {
    request: FilesPostFileRequests;
}
export declare class FilesPostFileResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    filesPostFile200ApplicationJsonString?: string;
    filesPostFile200ApplicationXmlString?: string;
    filesPostFile200TextJsonString?: string;
    filesPostFile200TextXmlString?: string;
    statusCode: number;
}
