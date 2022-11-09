import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelTaskExecutionRequest
/** 
 * CancelTaskExecutionRequest
**/
export class CancelTaskExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn: string;
}
