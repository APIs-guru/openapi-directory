import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadFileByIdPathParams extends SpeakeasyBase {
    fileUuid: string;
    itemUuid: string;
    vaultUuid: string;
}
export declare class DownloadFileByIdSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class DownloadFileByIdRequest extends SpeakeasyBase {
    pathParams: DownloadFileByIdPathParams;
    security: DownloadFileByIdSecurity;
}
export declare class DownloadFileByIdResponse extends SpeakeasyBase {
    contentType: string;
    downloadFileById200ApplicationOctetStreamBinaryString?: Uint8Array;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
