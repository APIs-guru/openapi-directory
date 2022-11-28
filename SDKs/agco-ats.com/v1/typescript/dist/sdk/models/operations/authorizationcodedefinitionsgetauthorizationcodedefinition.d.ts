import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams extends SpeakeasyBase {
    categoryId?: string;
    createdByUserId?: number;
    deletedByUserId?: number;
    includeDeleted?: boolean;
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest extends SpeakeasyBase {
    queryParams: AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams;
}
export declare class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse extends SpeakeasyBase {
    apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
