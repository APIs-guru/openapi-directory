import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CheckConnectionToSourceForUpdateRequest extends SpeakeasyBase {
    request: shared.SourceUpdate;
}
export declare class CheckConnectionToSourceForUpdateResponse extends SpeakeasyBase {
    checkConnectionRead?: shared.CheckConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
