import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitiesGetActivitiesQueryParams extends SpeakeasyBase {
    isIncludeDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class ActivitiesGetActivitiesRequest extends SpeakeasyBase {
    queryParams: ActivitiesGetActivitiesQueryParams;
}
export declare class ActivitiesGetActivitiesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseBuildSystemSharedDtoActivity?: shared.ApiPagedResponseBuildSystemSharedDtoActivity;
    contentType: string;
    statusCode: number;
}
