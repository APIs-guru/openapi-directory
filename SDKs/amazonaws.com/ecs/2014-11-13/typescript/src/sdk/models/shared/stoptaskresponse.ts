import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Task } from "./task";


export class StopTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=task" })
  task?: Task;
}
