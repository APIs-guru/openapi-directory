import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RolesGetRolePermissionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RolesGetRolePermissionsQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class RolesGetRolePermissionsRequest extends SpeakeasyBase {
    pathParams: RolesGetRolePermissionsPathParams;
    queryParams: RolesGetRolePermissionsQueryParams;
}
export declare class RolesGetRolePermissionsResponse extends SpeakeasyBase {
    apiPagedResponseApiModelsPermission?: shared.ApiPagedResponseApiModelsPermission;
    contentType: string;
    statusCode: number;
}
