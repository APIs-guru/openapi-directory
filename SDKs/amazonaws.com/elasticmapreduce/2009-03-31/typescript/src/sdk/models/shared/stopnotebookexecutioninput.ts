import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopNotebookExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId: string;
}
