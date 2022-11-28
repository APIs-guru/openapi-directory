import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelDataRepositoryTaskRequest
/** 
 * Cancels a data repository task.
**/
export class CancelDataRepositoryTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskId" })
  taskId: string;
}
