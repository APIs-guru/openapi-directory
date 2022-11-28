import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PermissionsPostPermissionRequests extends SpeakeasyBase {
    apiModelsPermission?: shared.ApiModelsPermission;
    apiModelsPermission1?: shared.ApiModelsPermission;
    apiModelsPermission2?: shared.ApiModelsPermission;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PermissionsPostPermissionRequest extends SpeakeasyBase {
    request: PermissionsPostPermissionRequests;
}
export declare class PermissionsPostPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    permissionsPostPermission200ApplicationJsonInt32Integer?: number;
    permissionsPostPermission200TextJsonInt32Integer?: number;
    statusCode: number;
}
