import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobRunsGetJobRunsQueryParams extends SpeakeasyBase {
    includeActivityRunDetails?: boolean;
    limit?: number;
    offset?: number;
}
export declare class JobRunsGetJobRunsRequest extends SpeakeasyBase {
    queryParams: JobRunsGetJobRunsQueryParams;
}
export declare class JobRunsGetJobRunsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseBuildSystemSharedDtoJobRun?: shared.ApiPagedResponseBuildSystemSharedDtoJobRun;
    contentType: string;
    statusCode: number;
}
