import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserPermissionsGetPermissionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserPermissionsGetPermissionsQueryParams extends SpeakeasyBase {
    permission?: string;
    limit?: number;
    offset?: number;
}
export declare class UserPermissionsGetPermissionsRequest extends SpeakeasyBase {
    pathParams: UserPermissionsGetPermissionsPathParams;
    queryParams: UserPermissionsGetPermissionsQueryParams;
}
export declare class UserPermissionsGetPermissionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseApiModelsUserEffectivePermission?: shared.ApiPagedResponseApiModelsUserEffectivePermission;
    contentType: string;
    statusCode: number;
}
