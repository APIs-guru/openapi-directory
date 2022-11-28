import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesPutFilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesPutFileRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsFileDownload?: shared.GlobalResourcesSharedModelsFileDownload;
    globalResourcesSharedModelsFileDownload1?: shared.GlobalResourcesSharedModelsFileDownload;
    globalResourcesSharedModelsFileDownload2?: shared.GlobalResourcesSharedModelsFileDownload;
    textXml: Uint8Array;
}
export declare class FilesPutFileRequest extends SpeakeasyBase {
    pathParams: FilesPutFilePathParams;
    request: FilesPutFileRequests;
}
export declare class FilesPutFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
