import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateOperationRequest extends SpeakeasyBase {
    request: shared.OperationCreate;
}
export declare class CreateOperationResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    operationRead?: shared.OperationRead;
    statusCode: number;
}
