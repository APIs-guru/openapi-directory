import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartTaskExecutionResponse
/** 
 * StartTaskExecutionResponse
**/
export class StartTaskExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn?: string;
}
