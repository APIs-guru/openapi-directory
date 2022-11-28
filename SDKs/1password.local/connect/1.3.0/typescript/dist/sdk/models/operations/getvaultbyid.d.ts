import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVaultByIdPathParams extends SpeakeasyBase {
    vaultUuid: string;
}
export declare class GetVaultByIdSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetVaultByIdRequest extends SpeakeasyBase {
    pathParams: GetVaultByIdPathParams;
    security: GetVaultByIdSecurity;
}
export declare class GetVaultByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    vault?: shared.Vault;
}
