import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVaultsQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetVaultsSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetVaultsRequest extends SpeakeasyBase {
    queryParams: GetVaultsQueryParams;
    security: GetVaultsSecurity;
}
export declare class GetVaultsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    vaults?: shared.Vault[];
}
