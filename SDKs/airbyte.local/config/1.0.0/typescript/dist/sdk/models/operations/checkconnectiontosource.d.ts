import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckConnectionToSourceRequest extends SpeakeasyBase {
    request: shared.SourceIdRequestBody;
}
export declare class CheckConnectionToSourceResponse extends SpeakeasyBase {
    checkConnectionRead?: shared.CheckConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
