import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchVaultItemPathParams extends SpeakeasyBase {
    itemUuid: string;
    vaultUuid: string;
}
export declare class PatchVaultItemSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class PatchVaultItemRequest extends SpeakeasyBase {
    pathParams: PatchVaultItemPathParams;
    request?: shared.Patch[];
    security: PatchVaultItemSecurity;
}
export declare class PatchVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fullItem?: shared.FullItem;
    statusCode: number;
}
