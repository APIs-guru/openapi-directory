import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityRunsGetActivityRunPathParams extends SpeakeasyBase {
    activityRunId: number;
}
export declare class ActivityRunsGetActivityRunRequest extends SpeakeasyBase {
    pathParams: ActivityRunsGetActivityRunPathParams;
}
export declare class ActivityRunsGetActivityRunResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;
    contentType: string;
    statusCode: number;
}
