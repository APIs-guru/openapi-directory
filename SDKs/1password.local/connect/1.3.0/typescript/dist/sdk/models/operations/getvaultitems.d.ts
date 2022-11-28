import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVaultItemsPathParams extends SpeakeasyBase {
    vaultUuid: string;
}
export declare class GetVaultItemsQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetVaultItemsSecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetVaultItemsRequest extends SpeakeasyBase {
    pathParams: GetVaultItemsPathParams;
    queryParams: GetVaultItemsQueryParams;
    security: GetVaultItemsSecurity;
}
export declare class GetVaultItemsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    items?: shared.Item[];
    statusCode: number;
}
