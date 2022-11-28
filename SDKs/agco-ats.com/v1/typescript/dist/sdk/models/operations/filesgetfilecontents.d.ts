import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesGetFileContentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesGetFileContentsRequest extends SpeakeasyBase {
    pathParams: FilesGetFileContentsPathParams;
}
export declare class FilesGetFileContentsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
