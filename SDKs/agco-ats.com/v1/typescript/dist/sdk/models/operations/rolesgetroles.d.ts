import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RolesGetRolesQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class RolesGetRolesRequest extends SpeakeasyBase {
    queryParams: RolesGetRolesQueryParams;
}
export declare class RolesGetRolesResponse extends SpeakeasyBase {
    apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;
    contentType: string;
    statusCode: number;
}
