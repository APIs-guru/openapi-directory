import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportTask } from "./importtask";


export class StartImportTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=task" })
  task?: ImportTask;
}
