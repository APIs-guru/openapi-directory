import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobRunsDeleteJobRunPathParams extends SpeakeasyBase {
    jobRunId: number;
}
export declare class JobRunsDeleteJobRunRequest extends SpeakeasyBase {
    pathParams: JobRunsDeleteJobRunPathParams;
}
export declare class JobRunsDeleteJobRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
