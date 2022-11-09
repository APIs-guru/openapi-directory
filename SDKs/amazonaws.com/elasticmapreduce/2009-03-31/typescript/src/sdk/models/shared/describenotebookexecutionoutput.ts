import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookExecution } from "./notebookexecution";


export class DescribeNotebookExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookExecution" })
  notebookExecution?: NotebookExecution;
}
