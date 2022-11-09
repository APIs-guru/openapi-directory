import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotebookExecutionSummary } from "./notebookexecutionsummary";


export class ListNotebookExecutionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=NotebookExecutions", elemType: shared.NotebookExecutionSummary })
  notebookExecutions?: NotebookExecutionSummary[];
}
