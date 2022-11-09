import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetItemFilesPathParams extends SpeakeasyBase {
    itemUuid: string;
    vaultUuid: string;
}
export declare class GetItemFilesQueryParams extends SpeakeasyBase {
    inlineFiles?: boolean;
}
export declare class GetItemFilesSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetItemFilesRequest extends SpeakeasyBase {
    pathParams: GetItemFilesPathParams;
    queryParams: GetItemFilesQueryParams;
    security: GetItemFilesSecurity;
}
export declare class GetItemFilesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    files?: shared.File[];
    statusCode: number;
}
