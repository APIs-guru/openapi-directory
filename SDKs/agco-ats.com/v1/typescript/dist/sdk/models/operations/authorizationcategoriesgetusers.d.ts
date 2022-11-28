import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCategoriesGetUsersQueryParams extends SpeakeasyBase {
    categoryIDs?: string;
    includeCategories?: boolean;
    includeUsers?: boolean;
    limit?: number;
    offset?: number;
    userIDs?: string;
    userSearch?: string;
}
export declare class AuthorizationCategoriesGetUsersRequest extends SpeakeasyBase {
    queryParams: AuthorizationCategoriesGetUsersQueryParams;
}
export declare class AuthorizationCategoriesGetUsersResponse extends SpeakeasyBase {
    apiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
