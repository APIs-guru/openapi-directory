import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserPermissionsGetCurrentUserRolesQueryParams extends SpeakeasyBase {
    role?: string;
    limit?: number;
    offset?: number;
}
export declare class UserPermissionsGetCurrentUserRolesRequest extends SpeakeasyBase {
    queryParams: UserPermissionsGetCurrentUserRolesQueryParams;
}
export declare class UserPermissionsGetCurrentUserRolesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;
    contentType: string;
    statusCode: number;
}
