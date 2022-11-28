import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityRunsGetActivityRunStatusPathParams extends SpeakeasyBase {
    activityRunId: number;
}
export declare class ActivityRunsGetActivityRunStatusRequest extends SpeakeasyBase {
    pathParams: ActivityRunsGetActivityRunStatusPathParams;
}
export declare class ActivityRunsGetActivityRunStatusResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoActivityRunStatus?: shared.BuildSystemSharedDtoActivityRunStatus;
    contentType: string;
    statusCode: number;
}
