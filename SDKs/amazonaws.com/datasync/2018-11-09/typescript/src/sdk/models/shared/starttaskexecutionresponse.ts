import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartTaskExecutionResponse
/** 
 * StartTaskExecutionResponse
**/
export class StartTaskExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn?: string;
}
