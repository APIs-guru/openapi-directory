import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PermissionsGetPermissionsQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class PermissionsGetPermissionsRequest extends SpeakeasyBase {
    queryParams: PermissionsGetPermissionsQueryParams;
}
export declare class PermissionsGetPermissionsResponse extends SpeakeasyBase {
    apiPagedResponseApiModelsPermission?: shared.ApiPagedResponseApiModelsPermission;
    contentType: string;
    statusCode: number;
}
