import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";


// NotebookExecutionSummary
/** 
 * Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.
**/
export class NotebookExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=EditorId" })
  editorId?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId?: string;

  @Metadata({ data: "json, name=NotebookExecutionName" })
  notebookExecutionName?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: NotebookExecutionStatusEnum;
}
