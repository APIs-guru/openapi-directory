import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteVaultItemPathParams extends SpeakeasyBase {
    itemUuid: string;
    vaultUuid: string;
}
export declare class DeleteVaultItemSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class DeleteVaultItemRequest extends SpeakeasyBase {
    pathParams: DeleteVaultItemPathParams;
    security: DeleteVaultItemSecurity;
}
export declare class DeleteVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
