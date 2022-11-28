import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSystemGetCachedFilesPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class UpdateSystemGetCachedFilesQueryParams extends SpeakeasyBase {
    expired: boolean;
}
export declare class UpdateSystemGetCachedFilesRequest extends SpeakeasyBase {
    pathParams: UpdateSystemGetCachedFilesPathParams;
    queryParams: UpdateSystemGetCachedFilesQueryParams;
}
export declare class UpdateSystemGetCachedFilesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemGetCachedFiles200ApplicationJsonStrings?: string[];
    updateSystemGetCachedFiles200TextJsonStrings?: string[];
}
