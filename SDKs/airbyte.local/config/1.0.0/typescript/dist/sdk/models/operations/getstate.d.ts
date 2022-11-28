import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStateRequest extends SpeakeasyBase {
    request: shared.ConnectionIdRequestBody;
}
export declare class GetStateResponse extends SpeakeasyBase {
    connectionState?: shared.ConnectionState;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
