import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobRunsGetJobRunPathParams extends SpeakeasyBase {
    jobRunId: number;
}
export declare class JobRunsGetJobRunQueryParams extends SpeakeasyBase {
    includeActivityRunDetails?: boolean;
}
export declare class JobRunsGetJobRunRequest extends SpeakeasyBase {
    pathParams: JobRunsGetJobRunPathParams;
    queryParams: JobRunsGetJobRunQueryParams;
}
export declare class JobRunsGetJobRunResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRun;
    contentType: string;
    statusCode: number;
}
