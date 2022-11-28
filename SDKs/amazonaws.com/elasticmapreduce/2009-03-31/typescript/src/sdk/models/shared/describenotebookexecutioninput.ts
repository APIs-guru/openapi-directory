import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNotebookExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId: string;
}
