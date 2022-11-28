import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSourceRequest extends SpeakeasyBase {
    request: shared.SourceCreate;
}
export declare class CreateSourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    sourceRead?: shared.SourceRead;
    statusCode: number;
}
