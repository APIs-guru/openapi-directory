import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CancelJobRequest extends SpeakeasyBase {
    request: shared.JobIdRequestBody;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    jobInfoRead?: shared.JobInfoRead;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
