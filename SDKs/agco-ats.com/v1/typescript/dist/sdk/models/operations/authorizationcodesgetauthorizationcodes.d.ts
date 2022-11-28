import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCodesGetAuthorizationCodesQueryParams extends SpeakeasyBase {
    code?: string;
    createdByUserId?: number;
    definitionId?: string;
    deletedByUserId?: number;
    includeDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class AuthorizationCodesGetAuthorizationCodesRequest extends SpeakeasyBase {
    queryParams: AuthorizationCodesGetAuthorizationCodesQueryParams;
}
export declare class AuthorizationCodesGetAuthorizationCodesResponse extends SpeakeasyBase {
    apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
