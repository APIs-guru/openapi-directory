import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportTask } from "./importtask";



export class StartImportTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: ImportTask;
}
