import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobsDeleteJobPathParams extends SpeakeasyBase {
    jobId: number;
}
export declare class JobsDeleteJobRequest extends SpeakeasyBase {
    pathParams: JobsDeleteJobPathParams;
}
export declare class JobsDeleteJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
