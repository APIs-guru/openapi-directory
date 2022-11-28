import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ActivityRunsGetActivityRunsStatusEnum {
    Ready = "Ready",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Cancelled = "Cancelled",
    Failed = "Failed"
}
export declare class ActivityRunsGetActivityRunsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    status?: ActivityRunsGetActivityRunsStatusEnum;
}
export declare class ActivityRunsGetActivityRunsRequest extends SpeakeasyBase {
    queryParams: ActivityRunsGetActivityRunsQueryParams;
}
export declare class ActivityRunsGetActivityRunsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseBuildSystemSharedDtoActivityRun?: shared.ApiPagedResponseBuildSystemSharedDtoActivityRun;
    contentType: string;
    statusCode: number;
}
