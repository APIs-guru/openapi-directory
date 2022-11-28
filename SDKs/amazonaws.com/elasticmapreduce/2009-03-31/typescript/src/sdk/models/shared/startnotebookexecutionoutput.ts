import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartNotebookExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId?: string;
}
