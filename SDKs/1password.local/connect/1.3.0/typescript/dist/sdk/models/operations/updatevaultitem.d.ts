import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateVaultItemPathParams extends SpeakeasyBase {
    itemUuid: string;
    vaultUuid: string;
}
export declare class UpdateVaultItemSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class UpdateVaultItemRequest extends SpeakeasyBase {
    pathParams: UpdateVaultItemPathParams;
    request?: shared.FullItem;
    security: UpdateVaultItemSecurity;
}
export declare class UpdateVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fullItem?: shared.FullItem;
    statusCode: number;
}
