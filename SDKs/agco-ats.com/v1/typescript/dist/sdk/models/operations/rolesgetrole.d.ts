import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RolesGetRolePathParams extends SpeakeasyBase {
    id: number;
}
export declare class RolesGetRoleRequest extends SpeakeasyBase {
    pathParams: RolesGetRolePathParams;
}
export declare class RolesGetRoleResponse extends SpeakeasyBase {
    apiModelsRole?: shared.ApiModelsRole;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
