import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";



export class StopTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: Task;
}
