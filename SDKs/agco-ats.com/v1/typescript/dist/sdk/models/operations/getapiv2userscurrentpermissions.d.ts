import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2UsersCurrentPermissionsQueryParams extends SpeakeasyBase {
    permission?: string;
    limit?: number;
    offset?: number;
}
export declare class GetApiV2UsersCurrentPermissionsRequest extends SpeakeasyBase {
    queryParams: GetApiV2UsersCurrentPermissionsQueryParams;
}
export declare class GetApiV2UsersCurrentPermissionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseApiModelsUserEffectivePermission?: shared.ApiPagedResponseApiModelsUserEffectivePermission;
    contentType: string;
    statusCode: number;
}
