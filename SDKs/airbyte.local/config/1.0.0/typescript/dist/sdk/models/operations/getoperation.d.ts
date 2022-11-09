import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOperationRequest extends SpeakeasyBase {
    request: shared.OperationIdRequestBody;
}
export declare class GetOperationResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    operationRead?: shared.OperationRead;
    statusCode: number;
}
