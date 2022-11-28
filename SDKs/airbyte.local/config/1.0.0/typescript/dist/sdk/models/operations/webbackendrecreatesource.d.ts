import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebBackendRecreateSourceRequest extends SpeakeasyBase {
    request: shared.SourceRecreate;
}
export declare class WebBackendRecreateSourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    sourceRead?: shared.SourceRead;
    statusCode: number;
}
