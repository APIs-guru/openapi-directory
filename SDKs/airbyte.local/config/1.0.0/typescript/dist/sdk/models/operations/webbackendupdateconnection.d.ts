import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebBackendUpdateConnectionRequest extends SpeakeasyBase {
    request: shared.WebBackendConnectionUpdate;
}
export declare class WebBackendUpdateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    webBackendConnectionRead?: shared.WebBackendConnectionRead;
}
