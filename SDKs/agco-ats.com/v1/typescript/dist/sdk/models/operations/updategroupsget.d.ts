import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupsGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    userId?: number;
}
export declare class UpdateGroupsGetRequest extends SpeakeasyBase {
    queryParams: UpdateGroupsGetQueryParams;
}
export declare class UpdateGroupsGetResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsUpdateGroup?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroup;
    contentType: string;
    statusCode: number;
}
