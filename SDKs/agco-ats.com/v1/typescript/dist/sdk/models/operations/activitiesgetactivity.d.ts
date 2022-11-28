import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitiesGetActivityPathParams extends SpeakeasyBase {
    activityId: number;
}
export declare class ActivitiesGetActivityQueryParams extends SpeakeasyBase {
    isIncludeDeleted?: boolean;
}
export declare class ActivitiesGetActivityRequest extends SpeakeasyBase {
    pathParams: ActivitiesGetActivityPathParams;
    queryParams: ActivitiesGetActivityQueryParams;
}
export declare class ActivitiesGetActivityResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivity;
    contentType: string;
    statusCode: number;
}
