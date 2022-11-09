import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeNotebookExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId: string;
}
