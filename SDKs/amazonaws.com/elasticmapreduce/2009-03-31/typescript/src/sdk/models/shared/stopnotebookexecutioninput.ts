import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopNotebookExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId: string;
}
