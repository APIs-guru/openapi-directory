import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobsForRequest extends SpeakeasyBase {
    request: shared.JobListRequestBody;
}
export declare class ListJobsForResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    jobReadList?: shared.JobReadList;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
