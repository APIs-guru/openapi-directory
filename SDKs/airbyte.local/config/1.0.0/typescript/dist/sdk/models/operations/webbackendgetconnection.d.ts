import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebBackendGetConnectionRequest extends SpeakeasyBase {
    request: shared.WebBackendConnectionRequestBody;
}
export declare class WebBackendGetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    webBackendConnectionRead?: shared.WebBackendConnectionRead;
}
