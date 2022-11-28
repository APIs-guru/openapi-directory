import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesGetFilesQueryParams extends SpeakeasyBase {
    includeDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class FilesGetFilesRequest extends SpeakeasyBase {
    queryParams: FilesGetFilesQueryParams;
}
export declare class FilesGetFilesResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsFileDownload?: shared.ApiIPagedResponseGlobalResourcesSharedModelsFileDownload;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
