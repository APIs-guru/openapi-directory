import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogsRequest extends SpeakeasyBase {
    request: shared.LogsRequestBody;
}
export declare class GetLogsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    getLogs200TextPlainBinaryString?: Uint8Array;
}
