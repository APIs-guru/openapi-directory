import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsPostJobRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoJob?: shared.BuildSystemSharedDtoJobInput;
    buildSystemSharedDtoJob1?: shared.BuildSystemSharedDtoJobInput;
    buildSystemSharedDtoJob2?: shared.BuildSystemSharedDtoJobInput;
    textXml: Uint8Array;
}
export declare class JobsPostJobRequest extends SpeakeasyBase {
    request: JobsPostJobRequestsInput;
}
export declare class JobsPostJobResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    jobsPostJob200ApplicationJsonInt32Integer?: number;
    jobsPostJob200TextJsonInt32Integer?: number;
    statusCode: number;
}
