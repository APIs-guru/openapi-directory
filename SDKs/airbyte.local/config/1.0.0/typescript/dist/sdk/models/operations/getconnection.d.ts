import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectionRequest extends SpeakeasyBase {
    request: shared.ConnectionIdRequestBody;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    connectionRead?: shared.ConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
