import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserPermissionsGetRolesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserPermissionsGetRolesQueryParams extends SpeakeasyBase {
    role?: string;
    limit?: number;
    offset?: number;
}
export declare class UserPermissionsGetRolesRequest extends SpeakeasyBase {
    pathParams: UserPermissionsGetRolesPathParams;
    queryParams: UserPermissionsGetRolesQueryParams;
}
export declare class UserPermissionsGetRolesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;
    contentType: string;
    statusCode: number;
}
