import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";


export class ListNotebookExecutionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EditorId" })
  editorId?: string;

  @Metadata({ data: "json, name=From" })
  from?: Date;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=Status" })
  status?: NotebookExecutionStatusEnum;

  @Metadata({ data: "json, name=To" })
  to?: Date;
}
