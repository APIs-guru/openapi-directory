import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecution } from "./notebookexecution";



export class DescribeNotebookExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookExecution" })
  notebookExecution?: NotebookExecution;
}
