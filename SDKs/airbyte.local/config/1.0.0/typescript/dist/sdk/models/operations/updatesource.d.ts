import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSourceRequest extends SpeakeasyBase {
    request: shared.SourceUpdate;
}
export declare class UpdateSourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceRead?: shared.SourceRead;
    statusCode: number;
}
