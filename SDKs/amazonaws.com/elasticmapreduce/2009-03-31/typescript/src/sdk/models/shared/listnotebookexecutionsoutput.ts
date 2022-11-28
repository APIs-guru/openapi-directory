import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionSummary } from "./notebookexecutionsummary";



export class ListNotebookExecutionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookExecutions", elemType: NotebookExecutionSummary })
  notebookExecutions?: NotebookExecutionSummary[];
}
