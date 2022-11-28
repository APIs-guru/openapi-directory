import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelTaskExecutionRequest
/** 
 * CancelTaskExecutionRequest
**/
export class CancelTaskExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn: string;
}
