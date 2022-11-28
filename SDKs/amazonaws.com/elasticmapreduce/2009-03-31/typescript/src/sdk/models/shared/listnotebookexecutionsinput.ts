import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";



export class ListNotebookExecutionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EditorId" })
  editorId?: string;

  @SpeakeasyMetadata({ data: "json, name=From" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: NotebookExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=To" })
  to?: Date;
}
