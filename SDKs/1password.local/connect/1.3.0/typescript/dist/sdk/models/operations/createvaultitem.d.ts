import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateVaultItemPathParams extends SpeakeasyBase {
    vaultUuid: string;
}
export declare class CreateVaultItemSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class CreateVaultItemRequest extends SpeakeasyBase {
    pathParams: CreateVaultItemPathParams;
    request?: shared.FullItem;
    security: CreateVaultItemSecurity;
}
export declare class CreateVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fullItem?: shared.FullItem;
    statusCode: number;
}
