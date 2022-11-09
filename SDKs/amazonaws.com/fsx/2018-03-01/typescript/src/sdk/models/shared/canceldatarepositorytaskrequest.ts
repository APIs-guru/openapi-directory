import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelDataRepositoryTaskRequest
/** 
 * Cancels a data repository task.
**/
export class CancelDataRepositoryTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskId" })
  taskId: string;
}
