import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOperationRequest extends SpeakeasyBase {
    request: shared.OperationUpdate;
}
export declare class UpdateOperationResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    operationRead?: shared.OperationRead;
    statusCode: number;
}
