import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalImagesPutGlobalImageContentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GlobalImagesPutGlobalImageContentsQueryParams extends SpeakeasyBase {
    isFullImage?: boolean;
}
export declare class GlobalImagesPutGlobalImageContentsRequest extends SpeakeasyBase {
    pathParams: GlobalImagesPutGlobalImageContentsPathParams;
    queryParams: GlobalImagesPutGlobalImageContentsQueryParams;
}
export declare class GlobalImagesPutGlobalImageContentsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
