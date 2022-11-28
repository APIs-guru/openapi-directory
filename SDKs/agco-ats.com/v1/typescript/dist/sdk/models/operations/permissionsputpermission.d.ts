import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PermissionsPutPermissionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PermissionsPutPermissionRequests extends SpeakeasyBase {
    apiModelsPermission?: shared.ApiModelsPermission;
    apiModelsPermission1?: shared.ApiModelsPermission;
    apiModelsPermission2?: shared.ApiModelsPermission;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PermissionsPutPermissionRequest extends SpeakeasyBase {
    pathParams: PermissionsPutPermissionPathParams;
    request: PermissionsPutPermissionRequests;
}
export declare class PermissionsPutPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
