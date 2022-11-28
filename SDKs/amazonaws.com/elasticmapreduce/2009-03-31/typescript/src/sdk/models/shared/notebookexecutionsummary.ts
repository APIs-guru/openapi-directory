import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";



// NotebookExecutionSummary
/** 
 * Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.
**/
export class NotebookExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EditorId" })
  editorId?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionName" })
  notebookExecutionName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: NotebookExecutionStatusEnum;
}
