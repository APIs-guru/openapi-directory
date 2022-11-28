import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckOperationRequest extends SpeakeasyBase {
    request: shared.OperatorConfiguration;
}
export declare class CheckOperationResponse extends SpeakeasyBase {
    checkOperationRead?: shared.CheckOperationRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
