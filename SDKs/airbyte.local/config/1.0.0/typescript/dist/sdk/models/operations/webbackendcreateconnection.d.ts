import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebBackendCreateConnectionRequest extends SpeakeasyBase {
    request: shared.WebBackendConnectionCreate;
}
export declare class WebBackendCreateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    webBackendConnectionRead?: shared.WebBackendConnectionRead;
}
