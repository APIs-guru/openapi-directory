import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVaultItemByIdPathParams extends SpeakeasyBase {
    itemUuid: string;
    vaultUuid: string;
}
export declare class GetVaultItemByIdSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetVaultItemByIdRequest extends SpeakeasyBase {
    pathParams: GetVaultItemByIdPathParams;
    security: GetVaultItemByIdSecurity;
}
export declare class GetVaultItemByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fullItem?: shared.FullItem;
    statusCode: number;
}
