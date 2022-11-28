import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCategoriesGetQueryParams extends SpeakeasyBase {
    definitionId?: string;
    limit?: number;
    offset?: number;
    userId?: number;
}
export declare class AuthorizationCategoriesGetRequest extends SpeakeasyBase {
    queryParams: AuthorizationCategoriesGetQueryParams;
}
export declare class AuthorizationCategoriesGetResponse extends SpeakeasyBase {
    apiIPagedResponseAuthorizationCodesSharedModelsCategory?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategory;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
