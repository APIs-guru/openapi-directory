import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorInfo } from "./errorinfo";


// ExecutionResult
/** 
 *  Specifies the end result of the flow run. 
**/
export class ExecutionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytesProcessed" })
  bytesProcessed?: number;

  @Metadata({ data: "json, name=bytesWritten" })
  bytesWritten?: number;

  @Metadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @Metadata({ data: "json, name=recordsProcessed" })
  recordsProcessed?: number;
}
