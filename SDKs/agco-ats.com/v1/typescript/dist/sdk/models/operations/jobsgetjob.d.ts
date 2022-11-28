import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsGetJobPathParams extends SpeakeasyBase {
    jobId: number;
}
export declare class JobsGetJobQueryParams extends SpeakeasyBase {
    isIncludeDeleted?: boolean;
}
export declare class JobsGetJobRequest extends SpeakeasyBase {
    pathParams: JobsGetJobPathParams;
    queryParams: JobsGetJobQueryParams;
}
export declare class JobsGetJobResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoJob?: shared.BuildSystemSharedDtoJob;
    contentType: string;
    statusCode: number;
}
