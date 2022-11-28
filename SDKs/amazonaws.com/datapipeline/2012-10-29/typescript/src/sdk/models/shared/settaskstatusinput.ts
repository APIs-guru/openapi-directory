import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusEnum } from "./taskstatusenum";



// SetTaskStatusInput
/** 
 * Contains the parameters for SetTaskStatus.
**/
export class SetTaskStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorId" })
  errorId?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=errorStackTrace" })
  errorStackTrace?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId: string;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus: TaskStatusEnum;
}
