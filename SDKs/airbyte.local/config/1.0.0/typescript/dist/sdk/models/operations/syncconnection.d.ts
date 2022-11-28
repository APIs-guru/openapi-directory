import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncConnectionRequest extends SpeakeasyBase {
    request: shared.ConnectionIdRequestBody;
}
export declare class SyncConnectionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    jobInfoRead?: shared.JobInfoRead;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
