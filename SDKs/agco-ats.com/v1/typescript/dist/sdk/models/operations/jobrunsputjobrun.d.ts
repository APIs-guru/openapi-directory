import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobRunsPutJobRunPathParams extends SpeakeasyBase {
    jobRunId: number;
}
export declare class JobRunsPutJobRunRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRunInput;
    buildSystemSharedDtoJobRun1?: shared.BuildSystemSharedDtoJobRunInput;
    buildSystemSharedDtoJobRun2?: shared.BuildSystemSharedDtoJobRunInput;
    textXml: Uint8Array;
}
export declare class JobRunsPutJobRunRequest extends SpeakeasyBase {
    pathParams: JobRunsPutJobRunPathParams;
    request: JobRunsPutJobRunRequestsInput;
}
export declare class JobRunsPutJobRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
