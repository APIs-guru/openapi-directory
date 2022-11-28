import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceRequest extends SpeakeasyBase {
    request: shared.SourceIdRequestBody;
}
export declare class GetSourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceRead?: shared.SourceRead;
    statusCode: number;
}
