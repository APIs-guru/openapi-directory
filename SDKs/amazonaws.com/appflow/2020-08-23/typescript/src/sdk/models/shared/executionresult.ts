import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorInfo } from "./errorinfo";



// ExecutionResult
/** 
 *  Specifies the end result of the flow run. 
**/
export class ExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesProcessed" })
  bytesProcessed?: number;

  @SpeakeasyMetadata({ data: "json, name=bytesWritten" })
  bytesWritten?: number;

  @SpeakeasyMetadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @SpeakeasyMetadata({ data: "json, name=recordsProcessed" })
  recordsProcessed?: number;
}
