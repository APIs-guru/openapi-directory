import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStatusEnum } from "./taskstatusenum";


// SetTaskStatusInput
/** 
 * Contains the parameters for SetTaskStatus.
**/
export class SetTaskStatusInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorId" })
  errorId?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=errorStackTrace" })
  errorStackTrace?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId: string;

  @Metadata({ data: "json, name=taskStatus" })
  taskStatus: TaskStatusEnum;
}
