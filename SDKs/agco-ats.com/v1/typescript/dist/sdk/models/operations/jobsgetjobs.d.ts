import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsGetJobsQueryParams extends SpeakeasyBase {
    isIncludeDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class JobsGetJobsRequest extends SpeakeasyBase {
    queryParams: JobsGetJobsQueryParams;
}
export declare class JobsGetJobsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseBuildSystemSharedDtoJob?: shared.ApiPagedResponseBuildSystemSharedDtoJob;
    contentType: string;
    statusCode: number;
}
