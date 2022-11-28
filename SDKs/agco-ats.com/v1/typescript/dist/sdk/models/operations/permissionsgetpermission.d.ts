import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PermissionsGetPermissionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PermissionsGetPermissionRequest extends SpeakeasyBase {
    pathParams: PermissionsGetPermissionPathParams;
}
export declare class PermissionsGetPermissionResponse extends SpeakeasyBase {
    apiModelsPermission?: shared.ApiModelsPermission;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
