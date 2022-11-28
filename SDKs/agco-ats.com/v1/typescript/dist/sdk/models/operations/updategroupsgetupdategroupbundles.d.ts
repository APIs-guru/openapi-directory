import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupsGetUpdateGroupBundlesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateGroupsGetUpdateGroupBundlesQueryParams extends SpeakeasyBase {
    includeInactive: boolean;
    limit?: number;
    offset?: number;
}
export declare class UpdateGroupsGetUpdateGroupBundlesRequest extends SpeakeasyBase {
    pathParams: UpdateGroupsGetUpdateGroupBundlesPathParams;
    queryParams: UpdateGroupsGetUpdateGroupBundlesQueryParams;
}
export declare class UpdateGroupsGetUpdateGroupBundlesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;
    contentType: string;
    statusCode: number;
}
