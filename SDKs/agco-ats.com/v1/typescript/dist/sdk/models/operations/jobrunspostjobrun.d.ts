import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobRunsPostJobRunRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRunInput;
    buildSystemSharedDtoJobRun1?: shared.BuildSystemSharedDtoJobRunInput;
    buildSystemSharedDtoJobRun2?: shared.BuildSystemSharedDtoJobRunInput;
    textXml: Uint8Array;
}
export declare class JobRunsPostJobRunRequest extends SpeakeasyBase {
    request: JobRunsPostJobRunRequestsInput;
}
export declare class JobRunsPostJobRunResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    jobRunsPostJobRun200ApplicationJsonInt32Integer?: number;
    jobRunsPostJobRun200TextJsonInt32Integer?: number;
    statusCode: number;
}
