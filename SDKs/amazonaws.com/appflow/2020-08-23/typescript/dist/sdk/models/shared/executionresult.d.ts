import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorInfo } from "./errorinfo";
/**
 *  Specifies the end result of the flow run.
**/
export declare class ExecutionResult extends SpeakeasyBase {
    bytesProcessed?: number;
    bytesWritten?: number;
    errorInfo?: ErrorInfo;
    recordsProcessed?: number;
}
