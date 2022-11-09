import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJobInfoRequest extends SpeakeasyBase {
    request: shared.JobIdRequestBody;
}
export declare class GetJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    jobInfoRead?: shared.JobInfoRead;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
