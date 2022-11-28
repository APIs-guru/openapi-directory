import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOperationsForConnectionRequest extends SpeakeasyBase {
    request: shared.ConnectionIdRequestBody;
}
export declare class ListOperationsForConnectionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    operationReadList?: shared.OperationReadList;
    statusCode: number;
}
