import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDetailsOfFileByIdPathParams extends SpeakeasyBase {
    fileUuid: string;
    itemUuid: string;
    vaultUuid: string;
}
export declare class GetDetailsOfFileByIdQueryParams extends SpeakeasyBase {
    inlineFiles?: boolean;
}
export declare class GetDetailsOfFileByIdSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetDetailsOfFileByIdRequest extends SpeakeasyBase {
    pathParams: GetDetailsOfFileByIdPathParams;
    queryParams: GetDetailsOfFileByIdQueryParams;
    security: GetDetailsOfFileByIdSecurity;
}
export declare class GetDetailsOfFileByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    file?: shared.File;
    statusCode: number;
}
