import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResetConnectionRequest extends SpeakeasyBase {
    request: shared.ConnectionIdRequestBody;
}
export declare class ResetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    jobInfoRead?: shared.JobInfoRead;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
